#!/bin/csh
# c-shell script for MJO forecast based on RNN
# TensorFlow version 1.4.0

setenv h_dir  '/homedir/'   # Main directory
setenv epoch 1000                       # Epoch
setenv hidden1 10                      # Hidden Neuron
setenv hidden2 3                       # Hidden Neuron
setenv hidden3 3                       # Hidden Neuron
setenv learningrate 0.001              # Hidden Neuron

foreach exp (fim ecmwf ccsm4 navy geos5 glo gefs cesm)

  if ( $exp == 'ccsm4' ) then
   setenv nlead 45
   setenv ntraincase 508

  else if ( $exp == 'cesm' ) then
   setenv nlead 45
   setenv ntraincase 359

  else if ( $exp == 'fim' ) then
   setenv nlead 32
   setenv ntraincase 359

  else if ( $exp == 'ecmwf' ) then
   setenv nlead 32
   setenv ntraincase

  else if ( $exp == 'navy' ) then
   setenv nlead 45
   setenv ntraincase 1424

  else if ( $exp == 'geos5' ) then
   setenv nlead 45
   setenv ntraincase 500

  else if ( $exp == 'glo' ) then
   setenv nlead 45
   setenv ntraincase 320

  else if ( $exp == 'gefs' ) then
   setenv nlead 35
   setenv ntraincase 357
  endif

  else if ( $exp == 'ecmwf' ) then
   setenv nlead 32
   setenv ntraincase 357
   
   cd $h_dir/$exp/loocv_amp_ensm_post_pro

sed "s/LELE/$learningrate/g"      loocv.csh > tmp1
sed "s/EPEP/$epoch/g"                 tmp1 > tmp2
sed "s/HIHI/$hidden1/g"                tmp2 > tmp1
sed "s/HIIHII/$hidden2/g"                tmp1 > tmp2
sed "s/HIIIHIII/$hidden3/g"                tmp2 > tmp1
sed "s/NNN/$nlead/g"                 tmp1 > tmp2
sed "s/TRTR/$ntraincase/g"            tmp2 > main.csh

./main.csh

end
