#!/bin/csh
# c-shell script for MJO forecast based on RNN
# TensorFlow version 1.4.0

setenv epoch EPEP                       # Epoch
setenv hidden1 HIHI                       # Hidden Neuron
setenv hidden2 HIIHII                       # Hidden Neuron
setenv hidden3 HIIIHIII                       # Hidden Neuron
setenv learningrate LELE                       # Hidden Neuron
setenv nlead NNN
setenv nphase 4

setenv ntarget 2015
@ ltarget = 1999
while ( $ltarget <= $ntarget )
  set itarget = `awk 'BEGIN{ printf("%2.2d", '$ltarget') }' /dev/null`

@ lead = 1
while ( $lead <= $nlead )
  set ilead = `awk 'BEGIN{ printf("%2.2d", '$lead') }' /dev/null`

@ lphase = 1
while ( $lphase <= $nphase )
  set iphase = `awk 'BEGIN{ printf("%2.2d", '$lphase') }' /dev/null`

echo '  forecast lead:'  $itarget $ilead $iphase

sed "s/forecast_phase/$iphase/g"   ./LSTM/train.py > tmp1
sed "s/forecast_target/$itarget/g"   tmp1 > tmp2
sed "s/forecast_lead/$ilead/g"       tmp2 > tmp1
sed "s/LLL/$learningrate/g"          tmp1 > tmp2
sed "s/HHH11/$hidden1/g"             tmp2 > tmp1
sed "s/HHH22/$hidden2/g"             tmp1 > tmp2
sed "s/HHH33/$hidden3/g"             tmp2 > tmp1
sed "s/EEE/$epoch/g"                 tmp1 > train.y$itarget.d$ilead.p$iphase.py

sed "s/forecast_phase/$iphase/g"   ./LSTM/test.py > tmp2
sed "s/forecast_lead/$ilead/g"       tmp2 > tmp1
sed "s/forecast_target/$itarget/g"   tmp1 > test.y$itarget.d$ilead.p$iphase.py
python train.y$itarget.d$ilead.p$iphase.py
python test.y$itarget.d$ilead.p$iphase.py

@ lphase += 1
end
@ lead += 1
end
@ ltarget += 1
end
