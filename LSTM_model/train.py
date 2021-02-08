#!/usr/bin/env python
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Sequential, Model
from tensorflow.keras.layers import LSTM
from tensorflow.keras.layers import Dense
from tensorflow.keras.layers import RepeatVector
from tensorflow.keras.layers import TimeDistributed
from tensorflow.keras.utils import plot_model
from tensorflow.keras.callbacks import EarlyStopping
from tensorflow.keras import backend
import pathlib
import os

os.environ['TF_CPP_MIN_LOG_LEVEL']='2'

os.environ["CUDA_DEVICE_ORDER"]="PCI_BUS_ID"
os.environ["CUDA_VISIBLE_DEVICES"]= "2" 

gpus = tf.config.experimental.list_physical_devices('GPU')
tf.config.experimental.set_memory_growth(gpus[0], True)

######################file name #
exp_phase = 'forecast_phase'                         #   
exp_lead = 'forecast_lead'                         #   
exp_target = 'forecast_target'                         #   
##########################################

#####################################################
input_seq = 1           # input sequence year length
output_seq = 1
input_dim = 2            # input data feature
output_dim = 2           # output data feature
total_epoch = EEE     # Training
hidden_size1 = HHH11        # Hidden Neuron
hidden_size2 = HHH22        # Hidden Neuron
hidden_size3 = HHH33        # Hidden Neuron 
learning_rate = LLL    # Learning rate
####################################################
pathlib.Path('./output/p'+exp_phase+'/y'+exp_target+'/d'+exp_lead+'/model').mkdir(parents=True, exist_ok=True)
pathlib.Path('./output/p'+exp_phase+'/y'+exp_target+'/d'+exp_lead+'/result').mkdir(parents=True, exist_ok=True)
##################################################

########## Data
# Total Set X (RMM12)
total_x = open('./ec_data/data/target_y'+exp_target+'.fday'+exp_lead+'.p'+exp_phase+'.train_ec.gdat','r')
total_x = np.fromfile(total_x,np.float32)
total_x = total_x.reshape(-1,input_seq,input_dim) # [None,10,input_seq]

# Total Set Y, (RMM1)
total_y = open('./ec_data/data/target_y'+exp_target+'.fday'+exp_lead+'.p'+exp_phase+'.train_obs.gdat','r')
total_y = np.fromfile(total_y,np.float32)
total_y = total_y.reshape(-1,output_dim)
total_y = total_y[:,:output_dim]

# Training Set
train_x = total_x[:,:,:]
train_y = total_y[:,:]
# Validation Set
val_x = total_x[:,:,:]
val_y = total_y[:,:]

#################################### Model start
XX = tf.keras.layers.Input(shape=(input_seq,input_dim))

# 1st layer
cell_output1  =  tf.keras.layers.LSTM(hidden_size1,
                                     return_state=False,
                                     return_sequences=False, # False to True
                                     activation='tanh',
                                     kernel_initializer=tf.keras.initializers.glorot_normal())(XX)

output = tf.keras.layers.Dense(hidden_size1,activation='tanh',
                               kernel_initializer=tf.keras.initializers.glorot_normal())(cell_output1) #

yhat = tf.keras.layers.Dense(output_dim,activation=None)(output)
model = tf.keras.models.Model(inputs=XX, outputs=yhat)
model.compile(optimizer='adam', loss='mse')
callbacks_list = [tf.keras.callbacks.EarlyStopping(
                     monitor='val_loss',
                     mode='min',
                     patience=25),
                  tf.keras.callbacks.ModelCheckpoint(
                     filepath='./output/p'+exp_phase+'/y'+exp_target+'/d'+exp_lead+'/model/model.hdf5',
                     monitor='val_loss',
                     save_best_only=True) ]
##################################### Model end

# Training start
print('Training start')
history = model.fit(train_x,train_y,validation_data=(val_x, val_y),
                    epochs=total_epoch, verbose=1, callbacks=callbacks_list)
# Training end
print('Traing end')

# cost print
tr_cost = history.history['loss']
va_cost = history.history['val_loss']
tr_cost = np.asarray(tr_cost)
va_cost = np.asarray(va_cost)

# model
end_model = tf.keras.models.load_model('./output/p'+exp_phase+'/y'+exp_target+'/d'+exp_lead+'/model/model.hdf5')
loss = end_model.evaluate(val_x,val_y,verbose=0)


print('code end')
