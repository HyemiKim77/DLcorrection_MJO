#!/usr/bin/env python
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM
from tensorflow.keras.layers import Dense
from tensorflow.keras.layers import RepeatVector
from tensorflow.keras.layers import TimeDistributed
from tensorflow.keras.utils import plot_model
from tensorflow.keras.callbacks import EarlyStopping

import pathlib
import os, sys

os.environ['TF_CPP_MIN_LOG_LEVEL']='2'

os.environ["CUDA_DEVICE_ORDER"]="PCI_BUS_ID"
os.environ["CUDA_VISIBLE_DEVICES"]= "2" 

gpus = tf.config.experimental.list_physical_devices('GPU')
tf.config.experimental.set_memory_growth(gpus[0], True)

exp_phase = 'forecast_phase'                         #
exp_lead = 'forecast_lead'                         #
exp_target = 'forecast_target'                         #
##########################################

#####################################################
input_seq = 1           # input sequence year length
seq_len = 1             # input sequence year length
input_dim = 2            # input data feature
output_dim = 2           # output data feature
####################################################

pathlib.Path('./output/p'+exp_phase+'/y'+exp_target+'/d'+exp_lead+'/model').mkdir(parents=True, exist_ok=True)
pathlib.Path('./output/p'+exp_phase+'/y'+exp_target+'/d'+exp_lead+'/result').mkdir(parents=True, exist_ok=True)
##################################################

########## Test

# Test Set X
val_x = open('./ec_data/data/target_y'+exp_target+'.fday'+exp_lead+'.p'+exp_phase+'.test_ec.gdat','r')
val_x = np.fromfile(val_x,np.float32)
val_x = val_x.reshape(-1,input_seq,input_dim) # [None,10,input_seq]
val_x = val_x[:,:,:]
# Model
Ymodel = tf.keras.models.load_model('./output/p'+exp_phase+'/y'+exp_target+'/d'+exp_lead+'/model/model.hdf5')
tt = val_x
yhat = Ymodel.predict(tt) # 
yhat=yhat.reshape(-1,1,output_dim)
yy = yhat
y = yy
y.astype('float32').tofile('./output/p'+exp_phase+'/y'+exp_target+'/d'+exp_lead+'/result/yhat.gdat')
print('code end')
