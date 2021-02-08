**************************************************************************
* THIS program is for Space-phase diagram
* If you have any question, please contact Hyemi Kim
* hyemi.kim@stonybrook.edu
**************************************************************************
**************************************************************************
'reinit'
'set grads off'
'set grid off'
'set vrange -2. 2'
'set vrange2 -2. 2.'
'set xlint 1.0'
'set ylint 1.0'
'set xlopts 1 3 0.13'
'set ylopts 1 3 0.13'
'set annot 1 3'
'open /home/hmkim/phase_layer1_r12_r12/ecmwf/loocv_amp_ensm_post_pro/ec_data/ctrl.phase_comp.ctl'
'open /home/hmkim/phase_layer1_r12_r12/cesm/loocv_amp_ensm_post_pro/ec_data/ctrl.phase_comp.ctl'
'open /home/hmkim/phase_layer1_r12_r12/ccsm4/loocv_amp_ensm_post_pro/ec_data/ctrl.phase_comp.ctl'
'open /home/hmkim/phase_layer1_r12_r12/fim/loocv_amp_ensm_post_pro/ec_data/ctrl.phase_comp.ctl'
'open /home/hmkim/phase_layer1_r12_r12/geos5/loocv_amp_ensm_post_pro/ec_data/ctrl.phase_comp.ctl'
'open /home/hmkim/phase_layer1_r12_r12/glo/loocv_amp_ensm_post_pro/ec_data/ctrl.phase_comp.ctl'
'open /home/hmkim/phase_layer1_r12_r12/navy/loocv_amp_ensm_post_pro/ec_data/ctrl.phase_comp.ctl'
'open /home/hmkim/phase_layer1_r12_r12/gefs/loocv_amp_ensm_post_pro/ec_data/ctrl.phase_comp.ctl'

'open /home/hmkim/phase_layer1_r12_r12/ecmwf/loocv_amp_ensm_post_pro/ec_data/obs.phase_comp.ctl'
'open /home/hmkim/phase_layer1_r12_r12/cesm/loocv_amp_ensm_post_pro/ec_data/obs.phase_comp.ctl'
'open /home/hmkim/phase_layer1_r12_r12/ccsm4/loocv_amp_ensm_post_pro/ec_data/obs.phase_comp.ctl'
'open /home/hmkim/phase_layer1_r12_r12/fim/loocv_amp_ensm_post_pro/ec_data/obs.phase_comp.ctl'
'open /home/hmkim/phase_layer1_r12_r12/geos5/loocv_amp_ensm_post_pro/ec_data/obs.phase_comp.ctl'
'open /home/hmkim/phase_layer1_r12_r12/glo/loocv_amp_ensm_post_pro/ec_data/obs.phase_comp.ctl'
'open /home/hmkim/phase_layer1_r12_r12/navy/loocv_amp_ensm_post_pro/ec_data/obs.phase_comp.ctl'
'open /home/hmkim/phase_layer1_r12_r12/gefs/loocv_amp_ensm_post_pro/ec_data/obs.phase_comp.ctl'

'open /home/hmkim/phase_layer1_r12_r12/ecmwf/loocv_amp_ensm_post_pro/ec_data/rnn.phase_comp.ctl'
'open /home/hmkim/phase_layer1_r12_r12/cesm/loocv_amp_ensm_post_pro/ec_data/rnn.phase_comp.ctl'
'open /home/hmkim/phase_layer1_r12_r12/ccsm4/loocv_amp_ensm_post_pro/ec_data/rnn.phase_comp.ctl'
'open /home/hmkim/phase_layer1_r12_r12/fim/loocv_amp_ensm_post_pro/ec_data/rnn.phase_comp.ctl'
'open /home/hmkim/phase_layer1_r12_r12/geos5/loocv_amp_ensm_post_pro/ec_data/rnn.phase_comp.ctl'
'open /home/hmkim/phase_layer1_r12_r12/glo/loocv_amp_ensm_post_pro/ec_data/rnn.phase_comp.ctl'
'open /home/hmkim/phase_layer1_r12_r12/navy/loocv_amp_ensm_post_pro/ec_data/rnn.phase_comp.ctl'
'open /home/hmkim/phase_layer1_r12_r12/gefs/loocv_amp_ensm_post_pro/ec_data/rnn.phase_comp.ctl'

'open  /home/hmkim/phase_layer1_r12_r12/anal/loocv/data/mme.ctrl.phase_comp.rmm12.ctl'
'open  /home/hmkim/phase_layer1_r12_r12/anal/loocv//data/mme.obs.phase_comp.rmm12.ctl'
'open  /home/hmkim/phase_layer1_r12_r12/anal/loocv//data/mme.rnn.phase_comp.rmm12.ctl'

x0=1.
x1=8.
y0=1.5
y1=8.5
xs = x1 - x0
ys = y1 - y0
xm = (x0+x1)/2
ym = (y0+y1)/2
'set ccolor 1'
'set string 1 c 3'
'set strsiz 0.18'
'draw string 4.5 8.8  Multi-model RMM composite'
'set strsiz 0.16'
'set string 1 c 3 90'
'draw string 'x0-0.4' 'ym' RMM2'
'set string 1 c 3 0'
'draw string 'xm' 'y0-0.4' RMM1'
'set string 1 c 3'
'draw string 'x0+0.3' 'y0+0.7' P1'
'draw string 'x1-0.3' 'y0+0.7' P4'
'draw string 'x0+0.7' 'y0+0.3' P2'
'draw string 'x1-0.7' 'y0+0.3' P3'

'draw string 'x1-0.3' 'y1-0.7' P5'
'draw string 'x0+0.3' 'y1-0.7' P8'

'draw string 'x1-0.7' 'y1-0.3' P6'
'draw string 'x0+0.7' 'y1-0.3' P7'
*'set string 1 c 3 0'
*'draw string 'xm' 'y0+0.35' `1 Indian'
*'draw string 'xm' 'y0+0.15' `1 Ocean'
*'draw string 'xm' 'y1-0.15' `1 Western'
*'draw string 'xm' 'y1-0.35' `1 Pacific'
*'set string 1 c 3 90'
*'draw string 'x0+0.15' 'ym' `1 West. Hem.'
*'draw string 'x0+0.35' 'ym' `1 & Africa'
*'set string 1 c 3 270'
*'draw string 'x1-0.15' 'ym' `1 Maritime'
*'draw string 'x1-0.35' 'ym' `1 Continent'
'set line 15 1 1'
'draw line 'x0' 'y0' 'x1' 'y1
'draw line 'x0' 'y1' 'x1' 'y0
'draw line 'xm' 'y0' 'xm' 'y1
'draw line 'x0' 'ym' 'x1' 'ym
'run circle.gs 'xm' 'ym'  1.7  360 15'

'set strsiz 0.15'
'set string 1 c 3 0'
'set string 1 l 6'
'draw string 1.3 3.2 OBS'
'set string 4 l 6'
'draw string 1.3 2.9 S2S'
'set string 2 l 6'
'draw string 1.3 2.6 DL'


'set parea  'x0' 'x1' 'y0' 'y1
'set t 1 2'
'set z 1'
'set gxout scatter'
'set digsize 0.01'
'set line 4'
'set ccolor 4'
'set cmark 0'
'd rmm1;rmm2'
z1 = 1
z2 = 8
while (z1<=z2)
'set line 4 1 3'
'set z 'z1
'set t 1'
'define o1= tloop(ave(rmm1.1,t+0,t+2))'
'define o2= tloop(ave(rmm2.1,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 2 'xx' 'yy' 0.06'
z1 = z1 + 1
endwhile

z1 = 1
z2 = 8
while (z1<=z2)
'set z 'z1
'set t 1'
'define o1= tloop(ave(rmm1.2,t+0,t+2))'
'define o2= tloop(ave(rmm2.2,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 2 'xx' 'yy' 0.06'
z1 = z1 + 1
endwhile

z1 = 1
z2 = 8
while (z1<=z2)
'set z 'z1
'set t 1'
'define o1= tloop(ave(rmm1.3,t+0,t+2))'
'define o2= tloop(ave(rmm2.3,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 2 'xx' 'yy' 0.06'
z1 = z1 + 1
endwhile

z1 = 1
z2 = 8
while (z1<=z2)
'set line 4 1 3'
'set z 'z1
'set t 1'
'define o1= tloop(ave(rmm1.4,t+0,t+2))'
'define o2= tloop(ave(rmm2.4,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 2 'xx' 'yy' 0.06'
z1 = z1 + 1
endwhile

z1 = 1
z2 = 8
while (z1<=z2)
'set z 'z1
'set t 1'
'define o1= tloop(ave(rmm1.5,t+0,t+2))'
'define o2= tloop(ave(rmm2.5,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 2 'xx' 'yy' 0.06'
z1 = z1 + 1
endwhile

z1 = 1
z2 = 8
while (z1<=z2)
'set z 'z1
'set t 1'
'define o1= tloop(ave(rmm1.6,t+0,t+2))'
'define o2= tloop(ave(rmm2.6,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 2 'xx' 'yy' 0.06'
z1 = z1 + 1
endwhile

z1 = 1
z2 = 8
while (z1<=z2)
'set z 'z1
'set t 1'
'define o1= tloop(ave(rmm1.7,t+0,t+2))'
'define o2= tloop(ave(rmm2.7,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 2 'xx' 'yy' 0.06'
z1 = z1 + 1
endwhile

z1 = 1
z2 = 8
while (z1<=z2)
'set z 'z1
'set t 1'
'define o1= tloop(ave(rmm1.8,t+0,t+2))'
'define o2= tloop(ave(rmm2.8,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 2 'xx' 'yy' 0.06'
z1 = z1 + 1
endwhile


****OBS ***
'set t 1 2'
'set z 1'
'set gxout scatter'
'set digsize 0.01'
'set line 4'
'set ccolor 1'
'set cmark 0'
'd rmm1.9;rmm2.9'
'set line 1 1 3'

z1 = 1
z2 = 8
while (z1<=z2)
'set line 1 1 3'
'set z 'z1
'set t 1'
'define o1= tloop(ave(rmm1.9,t+0,t+2))'
'define o2= tloop(ave(rmm2.9,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 2 'xx' 'yy' 0.06'
z1 = z1 + 1
endwhile

z1 = 1
z2 = 8
while (z1<=z2)
'set z 'z1
'set t 1'
'define o1= tloop(ave(rmm1.10,t+0,t+2))'
'define o2= tloop(ave(rmm2.10,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 2 'xx' 'yy' 0.06'
z1 = z1 + 1
endwhile

z1 = 1
z2 = 8
while (z1<=z2)
'set z 'z1
'set t 1'
'define o1= tloop(ave(rmm1.11,t+0,t+2))'
'define o2= tloop(ave(rmm2.11,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 2 'xx' 'yy' 0.06'
z1 = z1 + 1
endwhile

z1 = 1
z2 = 8
while (z1<=z2)
'set z 'z1
'set t 1'
'define o1= tloop(ave(rmm1.12,t+0,t+2))'
'define o2= tloop(ave(rmm2.12,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 2 'xx' 'yy' 0.06'
z1 = z1 + 1
endwhile

z1 = 1
z2 = 8
while (z1<=z2)
'set z 'z1
'set t 1'
'define o1= tloop(ave(rmm1.13,t+0,t+2))'
'define o2= tloop(ave(rmm2.13,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 2 'xx' 'yy' 0.06'
z1 = z1 + 1
endwhile

z1 = 1
z2 = 8
while (z1<=z2)
'set z 'z1
'set t 1'
'define o1= tloop(ave(rmm1.14,t+0,t+2))'
'define o2= tloop(ave(rmm2.14,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 2 'xx' 'yy' 0.06'
z1 = z1 + 1
endwhile

z1 = 1
z2 = 8
while (z1<=z2)
'set z 'z1
'set t 1'
'define o1= tloop(ave(rmm1.15,t+0,t+2))'
'define o2= tloop(ave(rmm2.15,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 2 'xx' 'yy' 0.06'
z1 = z1 + 1
endwhile

z1 = 1
z2 = 8
while (z1<=z2)
'set z 'z1
'set t 1'
'define o1= tloop(ave(rmm1.16,t+0,t+2))'
'define o2= tloop(ave(rmm2.16,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 2 'xx' 'yy' 0.06'
z1 = z1 + 1
endwhile

****RNN****
****OBS ***
'set t 1 2'
'set z 1'
'set gxout scatter'
'set digsize 0.01'
'set line 4'
'set ccolor 2'
'set cmark 0'
'd rmm1.17;rmm2.17'
'set line 2 1 3'

z1 = 1
z2 = 8
while (z1<=z2)
'set line 2 1 3'
'set z 'z1
'set t 1'
'define o1= tloop(ave(rmm1.17,t+0,t+2))'
'define o2= tloop(ave(rmm2.17,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 2 'xx' 'yy' 0.06'
z1 = z1 + 1
endwhile

z1 = 1
z2 = 8
while (z1<=z2)
'set z 'z1
'set t 1'
'define o1= tloop(ave(rmm1.18,t+0,t+2))'
'define o2= tloop(ave(rmm2.18,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 2 'xx' 'yy' 0.06'
z1 = z1 + 1
endwhile

z1 = 1
z2 = 8
while (z1<=z2)
'set z 'z1
'set t 1'
'define o1= tloop(ave(rmm1.19,t+0,t+2))'
'define o2= tloop(ave(rmm2.19,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 2 'xx' 'yy' 0.06'
z1 = z1 + 1
endwhile

z1 = 1
z2 = 8
while (z1<=z2)
'set z 'z1
'set t 1'
'define o1= tloop(ave(rmm1.20,t+0,t+2))'
'define o2= tloop(ave(rmm2.20,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 2 'xx' 'yy' 0.06'
z1 = z1 + 1
endwhile

z1 = 1
z2 = 8
while (z1<=z2)
'set z 'z1
'set t 1'
'define o1= tloop(ave(rmm1.21,t+0,t+2))'
'define o2= tloop(ave(rmm2.21,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 2 'xx' 'yy' 0.06'
z1 = z1 + 1
endwhile

z1 = 1
z2 = 8
while (z1<=z2)
'set z 'z1
'set t 1'
'define o1= tloop(ave(rmm1.22,t+0,t+2))'
'define o2= tloop(ave(rmm2.22,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 2 'xx' 'yy' 0.06'
z1 = z1 + 1
endwhile

z1 = 1
z2 = 8
while (z1<=z2)
'set z 'z1
'set t 1'
'define o1= tloop(ave(rmm1.23,t+0,t+2))'
'define o2= tloop(ave(rmm2.23,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 2 'xx' 'yy' 0.06'
z1 = z1 + 1
endwhile

z1 = 1
z2 = 8
while (z1<=z2)
'set z 'z1
'set t 1'
'define o1= tloop(ave(rmm1.24,t+0,t+2))'
'define o2= tloop(ave(rmm2.24,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 2 'xx' 'yy' 0.06'
z1 = z1 + 1
endwhile


************ MME *************
z1 = 1
z2 = 8
'set line 4 1 3'
while (z1<=z2)
'set z 'z1
'set t 1'
'define o1= tloop(ave(rmm1.25,t+0,t+2))'
'define o2= tloop(ave(rmm2.25,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 3 'xx' 'yy' 0.1'
z1 = z1 + 1
endwhile

z1 = 1
z2 = 8
'set line 1 1 3'
while (z1<=z2)
'set z 'z1
'set t 1'
'define o1= tloop(ave(rmm1.26,t+0,t+2))'
'define o2= tloop(ave(rmm2.26,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 3 'xx' 'yy' 0.1'
z1 = z1 + 1
endwhile

z1 = 1
z2 = 8
'set line 2 1 3'
while (z1<=z2)
'set z 'z1
'set t 1'
'define o1= tloop(ave(rmm1.27,t+0,t+2))'
'define o2= tloop(ave(rmm2.27,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 3 'xx' 'yy' 0.1'
z1 = z1 + 1
endwhile

******************************* MME *****************
'set parea  'x0' 'x1' 'y0' 'y1
'set t 1 10'
'set z 1'
'set gxout scatter'
'set digsize 0.01'
'set line 4'
'set ccolor 4'
'set cmark 0'
'd rmm1.7;rmm2.7'
z1 = 1
z2 = 8
while (z1<=z2)
'set line 4 1 3'
t1 = 1
t2 = t1 + 20
'set z 'z1
'set t 't1
'set t 1'
'define o1= tloop(ave(rmm1.25,t+0,t+2))'
'define o2= tloop(ave(rmm2.25,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 2 'xx' 'yy' 0.06'
t1 = t1 + 1
while (t1<=t2)
'set t 't1
'define o1= tloop(ave(rmm1.25,t+0,t+2))'
'define o2= tloop(ave(rmm2.25,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xxx=subwrd(result,3)
yyy=subwrd(result,6)
'draw line 'xx' 'yy' 'xxx' 'yyy
xx = xxx
yy = yyy
if (t1=1|t1=7|t1=14|t1=21|t1=28)
'draw mark 3 'xx' 'yy' 0.07'
endif
t1 = t1 + 1
endwhile
z1 = z1 + 1
endwhile
****OBS****
z1 = 1
z2 = 8
while (z1<=z2)
'set line 1 1 3'
t1 = 1
t2 = t1 + 20
'set z 'z1
'set t 't1
'define o1= tloop(ave(rmm1.26,t+0,t+2))'
'define o2= tloop(ave(rmm2.26,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 2 'xx' 'yy' 0.06'
t1 = t1 + 1
while (t1<=t2)
'set t 't1
'define o1= tloop(ave(rmm1.26,t+0,t+2))'
'define o2= tloop(ave(rmm2.26,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xxx=subwrd(result,3)
yyy=subwrd(result,6)
'draw line 'xx' 'yy' 'xxx' 'yyy
xx = xxx
yy = yyy
if (t1=1|t1=7|t1=14|t1=21|t1=28)
'draw mark 3 'xx' 'yy' 0.07'
endif
t1 = t1 + 1
endwhile
z1 = z1 + 1
endwhile
**************** RNNN
z1 = 1
z2 = 8
while (z1<=z2)
'set line 2 1 3'
t1 = 1
t2 = t1 + 20
'set z 'z1
'set t 't1
'define o1= tloop(ave(rmm1.27,t+0,t+2))'
'define o2= tloop(ave(rmm2.27,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 2 'xx' 'yy' 0.06'
t1 = t1 + 1
while (t1<=t2)
'set t 't1
'define o1= tloop(ave(rmm1.27,t+0,t+2))'
'define o2= tloop(ave(rmm2.27,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xxx=subwrd(result,3)
yyy=subwrd(result,6)
'draw line 'xx' 'yy' 'xxx' 'yyy
xx = xxx
yy = yyy
if (t1=1|t1=7|t1=14|t1=21|t1=28)
'draw mark 3 'xx' 'yy' 0.07'
endif
t1 = t1 + 1
endwhile
z1 = z1 + 1
endwhile
**************** RNNN
'set line 15 1 1'
'draw line 'xm' 'y0' 'xm' 'y1
'draw line 'x0' 'ym' 'x1' 'ym
'set string 1 c 3 0'
'draw string 'xm' 'y0+0.35' Indian'
'draw string 'xm' 'y0+0.15' Ocean'
'draw string 'xm' 'y1-0.15' Western'
'draw string 'xm' 'y1-0.35' Pacific'
'set string 1 c 3 90'
'draw string 'x0+0.15' 'ym' West. Hem.'
'draw string 'x0+0.35' 'ym' & Africa'
'set string 1 c 3 270'
'draw string 'x1-0.15' 'ym' Maritime'
'draw string 'x1-0.35' 'ym' Continent'

'enable print case.gx'
'print'
'disable print'
'!gxps -c -i case.gx -o ./fig/figure1.phase_space.ps'
