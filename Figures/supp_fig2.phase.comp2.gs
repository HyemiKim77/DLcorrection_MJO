**************************************************************************
* THIS program is for Space-phase diagram
* If you have any question, please contact Hyemi Kim
* hyemi.kim@stonybrook.edu
**************************************************************************
**************************************************************************
'reinit'
'set grads off'
'set grid off'
'set vrange -2.0 2.0'
'set vrange2 -2.0 2.0'
'set xlint 1.0'
'set ylint 1.0'
'set xlopts 1 3 0.08'
'set ylopts 1 3 0.08'
'set annot 1 3'

'open /home/hmkim/phase_layer1_r12_r12/fim/loocv_amp_ensm_post_pro/ec_data/ctrl.phase_comp.ctl'
'open /home/hmkim/phase_layer1_r12_r12/fim/loocv_amp_ensm_post_pro/ec_data/obs.phase_comp.ctl'
'open /home/hmkim/phase_layer1_r12_r12/fim/loocv_amp_ensm_post_pro/ec_data/rnn.phase_comp.ctl'

x0=1.
x1=3.05
y0=8.5
y1=10.5
xs = x1 - x0
ys = y1 - y0
xm = (x0+x1)/2
ym = (y0+y1)/2
'set ccolor 1'
'set string 1 l 3'
'set strsiz 0.11'
'draw string 1.1 0.7 Phase 1-3-5-7'
'draw string 3.6 0.7 Phase 2-4-6-8'

'draw string 1.0 10.65 e. ESRL-FIM'
'draw string 1.0 8.15 f. RSMAS-CCSM4'
'draw string 1.0 5.65 g. KMA/UKMO-GloSea5'
'draw string 1.0 3.15 h. NCEP-GEFS'
'set strsiz 0.09'
'set string 1 c 3 90'
'draw string 'x0-0.25' 'ym' RMM2'
'set string 1 c 3 0'
'draw string 'xm' 'y0-0.2' RMM1'

'set ccolor 1'
'set strsiz 0.08'
'set string 1 l 3'
'draw string 'x0+0.1' 'y0+0.5' P1'
'draw string 'x0+0.5' 'y0+0.15' P2'
'draw string 'x1-0.5' 'y1-0.15' P6'
'draw string 'x0+0.1' 'y1-0.5' P8'
'set string 1 r 3'
'draw string 'x1-0.1' 'y0+0.5' P4'
'draw string 'x1-0.5' 'y0+0.15' P3'
'draw string 'x0+0.5' 'y1-0.15' P7'
'draw string 'x1-0.1' 'y1-0.5' P5'

'set line 15 1 1'
'draw line 'x0' 'y0' 'x1' 'y1
'draw line 'x0' 'y1' 'x1' 'y0
'run circle.gs 'xm' 'ym'  0.50  360 15'

'set parea  'x0' 'x1' 'y0' 'y1
'set t 1 28'
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
if (z1=1|z1=3|z1=5|z1=7)
'set line 4 1 3'
t1 = 1
t2 = t1 + 27
'set z 'z1
'set t 't1
else
'set t 1'
'set line 4 1 3'
'set z 1'
endif
'define o1= tloop(ave(rmm1.1,t+0,t+2))'
'define o2= tloop(ave(rmm2.1,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 6 'xx' 'yy' 0.05'
t1 = t1 + 1
while (t1<=t2)
'set t 't1
'define o1= tloop(ave(rmm1.1,t+0,t+2))'
'define o2= tloop(ave(rmm2.1,t+0,t+2))'
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
'draw mark 3 'xx' 'yy' 0.05'
endif
t1 = t1 + 1
endwhile
z1 = z1 + 1
endwhile
****OBS****
z1 = 1
z2 = 8
while (z1<=z2)
if (z1=1|z1=3|z1=5|z1=7)
'set line 1 1 3'
t1 = 1
t2 = t1 + 27
'set z 'z1
'set t 't1
else
'set t 1'
'set line 1 1 3'
'set z 1'
endif
'define o1= tloop(ave(rmm1.2,t+0,t+2))'
'define o2= tloop(ave(rmm2.2,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 6 'xx' 'yy' 0.05'
t1 = t1 + 1
while (t1<=t2)
'set t 't1
'define o1= tloop(ave(rmm1.2,t+0,t+2))'
'define o2= tloop(ave(rmm2.2,t+0,t+2))'
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
'draw mark 3 'xx' 'yy' 0.05'
endif
t1 = t1 + 1
endwhile
z1 = z1 + 1
endwhile

****RNN****
z1 = 1
z2 = 8
while (z1<=z2)
if (z1=1|z1=3|z1=5|z1=7)
'set line 2 1 3'
t1 = 1
t2 = t1 + 27
'set z 'z1
'set t 't1
else
'set t 1'
'set line 2 1 3'
'set z 1'
endif
'define o1= tloop(ave(rmm1.3,t+0,t+2))'
'define o2= tloop(ave(rmm2.3,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 6 'xx' 'yy' 0.05'

t1 = t1 + 1
while (t1<=t2)
'set t 't1
'define o1= tloop(ave(rmm1.3,t+0,t+2))'
'define o2= tloop(ave(rmm2.3,t+0,t+2))'
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
'draw mark 3 'xx' 'yy' 0.05'
endif
t1 = t1 + 1
endwhile
z1 = z1 + 1
endwhile

*********** PHASE 2**************
x0=3.5
x1=5.55
y0=8.5
y1=10.5
xs = x1 - x0
ys = y1 - y0
xm = (x0+x1)/2
ym = (y0+y1)/2
'set ccolor 1'
'set strsiz 0.08'
'set string 1 l 3'
'draw string 'x0+0.1' 'y0+0.5' P1'
'draw string 'x0+0.5' 'y0+0.15' P2'
'draw string 'x1-0.5' 'y1-0.15' P6'
'draw string 'x0+0.1' 'y1-0.5' P8'
'set string 1 r 3'
'draw string 'x1-0.1' 'y0+0.5' P4'
'draw string 'x1-0.5' 'y0+0.15' P3'
'draw string 'x0+0.5' 'y1-0.15' P7'
'draw string 'x1-0.1' 'y1-0.5' P5'

'set line 15 1 1'
'draw line 'x0' 'y0' 'x1' 'y1
'draw line 'x0' 'y1' 'x1' 'y0
'run circle.gs 'xm' 'ym'  0.5  360 15'

'set parea  'x0' 'x1' 'y0' 'y1
'set t 1 21'
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
if (z1=2|z1=4|z1=6|z1=8)
'set line 4 1 3'
t1 = 1
t2 = t1 + 27
'set z 'z1
'set t 't1
else
'set t 1'
'set line 4 1 3'
'set z 2'
endif
'define o1= tloop(ave(rmm1.1,t+0,t+2))'
'define o2= tloop(ave(rmm2.1,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 6 'xx' 'yy' 0.05'
t1 = t1 + 1
while (t1<=t2)
'set t 't1
'define o1= tloop(ave(rmm1.1,t+0,t+2))'
'define o2= tloop(ave(rmm2.1,t+0,t+2))'
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
'draw mark 3 'xx' 'yy' 0.05'
endif
t1 = t1 + 1
endwhile
z1 = z1 + 1
endwhile
****OBS****
z1 = 1
z2 = 8
while (z1<=z2)
if (z1=2|z1=4|z1=6|z1=8)
'set line 1 1 3'
t1 = 1
t2 = t1 + 27
'set z 'z1
'set t 't1
else
'set t 1'
'set line 1 1 3'
'set z 2'
endif
'define o1= tloop(ave(rmm1.2,t+0,t+2))'
'define o2= tloop(ave(rmm2.2,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 6 'xx' 'yy' 0.05'
t1 = t1 + 1
while (t1<=t2)
'set t 't1
'define o1= tloop(ave(rmm1.2,t+0,t+2))'
'define o2= tloop(ave(rmm2.2,t+0,t+2))'
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
'draw mark 3 'xx' 'yy' 0.05'
endif
t1 = t1 + 1
endwhile
z1 = z1 + 1
endwhile

****RNN****
z1 = 1
z2 = 8
while (z1<=z2)
if (z1=2|z1=4|z1=6|z1=8)
'set line 2 1 3'
t1 = 1
t2 = t1 + 27
'set z 'z1
'set t 't1
else
'set t 1'
'set line 2 1 3'
'set z 2'
endif
'define o1= tloop(ave(rmm1.3,t+0,t+2))'
'define o2= tloop(ave(rmm2.3,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 6 'xx' 'yy' 0.05'

t1 = t1 + 1
while (t1<=t2)
'set t 't1
'define o1= tloop(ave(rmm1.3,t+0,t+2))'
'define o2= tloop(ave(rmm2.3,t+0,t+2))'
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
'draw mark 3 'xx' 'yy' 0.05'
endif
t1 = t1 + 1
endwhile
z1 = z1 + 1
endwhile

**********************MODEL2
'open /home/hmkim/phase_layer1_r12_r12/ccsm4/loocv_amp_ensm_post_pro/ec_data/ctrl.phase_comp.ctl'
'open /home/hmkim/phase_layer1_r12_r12/ccsm4/loocv_amp_ensm_post_pro/ec_data/obs.phase_comp.ctl'
'open /home/hmkim/phase_layer1_r12_r12/ccsm4/loocv_amp_ensm_post_pro/ec_data/rnn.phase_comp.ctl'
x0=1.
x1=3.05
y0=6.0
y1=8
xs = x1 - x0
ys = y1 - y0
xm = (x0+x1)/2
ym = (y0+y1)/2
'set ccolor 1'
'set strsiz 0.08'
'set string 1 l 3'
'draw string 'x0+0.1' 'y0+0.5' P1'
'draw string 'x0+0.5' 'y0+0.15' P2'
'draw string 'x1-0.5' 'y1-0.15' P6'
'draw string 'x0+0.1' 'y1-0.5' P8'
'set string 1 r 3'
'draw string 'x1-0.1' 'y0+0.5' P4'
'draw string 'x1-0.5' 'y0+0.15' P3'
'draw string 'x0+0.5' 'y1-0.15' P7'
'draw string 'x1-0.1' 'y1-0.5' P5'


'set line 15 1 1'
'draw line 'x0' 'y0' 'x1' 'y1
'draw line 'x0' 'y1' 'x1' 'y0
'run circle.gs 'xm' 'ym'  0.5  360 15'

'set parea  'x0' 'x1' 'y0' 'y1
'set t 1 21'
'set z 1'
'set gxout scatter'
'set digsize 0.01'
'set line 4'
'set ccolor 4'
'set cmark 0'
'd rmm1.4;rmm2.4'
z1 = 1
z2 = 8
while (z1<=z2)
if (z1=1|z1=3|z1=5|z1=7)
'set line 4 1 3'
t1 = 1
t2 = t1 + 27
'set z 'z1
'set t 't1
else
'set t 1'
'set line 4 1 3'
'set z 1'
endif
'define o1= tloop(ave(rmm1.4,t+0,t+2))'
'define o2= tloop(ave(rmm2.4,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 6 'xx' 'yy' 0.05'
t1 = t1 + 1
while (t1<=t2)
'set t 't1
'define o1= tloop(ave(rmm1.4,t+0,t+2))'
'define o2= tloop(ave(rmm2.4,t+0,t+2))'
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
'draw mark 3 'xx' 'yy' 0.05'
endif
t1 = t1 + 1
endwhile
z1 = z1 + 1
endwhile
****OBS****
z1 = 1
z2 = 8
while (z1<=z2)
if (z1=1|z1=3|z1=5|z1=7)
'set line 1 1 3'
t1 = 1
t2 = t1 + 27
'set z 'z1
'set t 't1
else
'set t 1'
'set line 1 1 3'
'set z 1'
endif
'define o1= tloop(ave(rmm1.5,t+0,t+2))'
'define o2= tloop(ave(rmm2.5,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 6 'xx' 'yy' 0.05'
t1 = t1 + 1
while (t1<=t2)
'set t 't1
'define o1= tloop(ave(rmm1.5,t+0,t+2))'
'define o2= tloop(ave(rmm2.5,t+0,t+2))'
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
'draw mark 3 'xx' 'yy' 0.05'
endif
t1 = t1 + 1
endwhile
z1 = z1 + 1
endwhile

****RNN****
z1 = 1
z2 = 8
while (z1<=z2)
if (z1=1|z1=3|z1=5|z1=7)
'set line 2 1 3'
t1 = 1
t2 = t1 + 27
'set z 'z1
'set t 't1
else
'set t 1'
'set line 2 1 3'
'set z 1'
endif
'define o1= tloop(ave(rmm1.6,t+0,t+2))'
'define o2= tloop(ave(rmm2.6,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 6 'xx' 'yy' 0.05'

t1 = t1 + 1
while (t1<=t2)
'set t 't1
'define o1= tloop(ave(rmm1.6,t+0,t+2))'
'define o2= tloop(ave(rmm2.6,t+0,t+2))'
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
'draw mark 3 'xx' 'yy' 0.05'
endif
t1 = t1 + 1
endwhile
z1 = z1 + 1
endwhile

*********** PHASE 2**************

x0=3.5
x1=5.55
y0=6
y1=8
xs = x1 - x0
ys = y1 - y0
xm = (x0+x1)/2
ym = (y0+y1)/2
'set ccolor 1'
'set strsiz 0.08'
'set string 1 l 3'
'draw string 'x0+0.1' 'y0+0.5' P1'
'draw string 'x0+0.5' 'y0+0.15' P2'
'draw string 'x1-0.5' 'y1-0.15' P6'
'draw string 'x0+0.1' 'y1-0.5' P8'
'set string 1 r 3'
'draw string 'x1-0.1' 'y0+0.5' P4'
'draw string 'x1-0.5' 'y0+0.15' P3'
'draw string 'x0+0.5' 'y1-0.15' P7'
'draw string 'x1-0.1' 'y1-0.5' P5'


'set line 15 1 1'
'draw line 'x0' 'y0' 'x1' 'y1
'draw line 'x0' 'y1' 'x1' 'y0
'run circle.gs 'xm' 'ym'  0.50  360 15'

'set parea  'x0' 'x1' 'y0' 'y1
'set t 1 21'
'set z 1'
'set gxout scatter'
'set digsize 0.01'
'set line 4'
'set ccolor 4'
'set cmark 0'
'd rmm1.4;rmm2.4'
z1 = 1
z2 = 8
while (z1<=z2)
if (z1=2|z1=4|z1=6|z1=8)
'set line 4 1 3'
t1 = 1
t2 = t1 + 27
'set z 'z1
'set t 't1
else
'set t 1'
'set line 4 1 3'
'set z 2'
endif
'define o1= tloop(ave(rmm1.4,t+0,t+2))'
'define o2= tloop(ave(rmm2.4,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 6 'xx' 'yy' 0.05'
t1 = t1 + 1
while (t1<=t2)
'set t 't1
'define o1= tloop(ave(rmm1.4,t+0,t+2))'
'define o2= tloop(ave(rmm2.4,t+0,t+2))'
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
'draw mark 3 'xx' 'yy' 0.05'
endif
t1 = t1 + 1
endwhile
z1 = z1 + 1
endwhile
****OBS****
z1 = 1
z2 = 8
while (z1<=z2)
if (z1=2|z1=4|z1=6|z1=8)
'set line 1 1 3'
t1 = 1
t2 = t1 + 27
'set z 'z1
'set t 't1
else
'set t 1'
'set line 1 1 3'
'set z 2'
endif
'define o1= tloop(ave(rmm1.5,t+0,t+2))'
'define o2= tloop(ave(rmm2.5,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 6 'xx' 'yy' 0.05'
t1 = t1 + 1
while (t1<=t2)
'set t 't1
'define o1= tloop(ave(rmm1.5,t+0,t+2))'
'define o2= tloop(ave(rmm2.5,t+0,t+2))'
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
'draw mark 3 'xx' 'yy' 0.05'
endif
t1 = t1 + 1
endwhile
z1 = z1 + 1
endwhile

****RNN****
z1 = 1
z2 = 8
while (z1<=z2)
if (z1=2|z1=4|z1=6|z1=8)
'set line 2 1 3'
t1 = 1
t2 = t1 + 27
'set z 'z1
'set t 't1
else
'set t 1'
'set line 2 1 3'
'set z 2'
endif
'define o1= tloop(ave(rmm1.6,t+0,t+2))'
'define o2= tloop(ave(rmm2.6,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 6 'xx' 'yy' 0.05'

t1 = t1 + 1
while (t1<=t2)
'set t 't1
'define o1= tloop(ave(rmm1.6,t+0,t+2))'
'define o2= tloop(ave(rmm2.6,t+0,t+2))'
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
'draw mark 3 'xx' 'yy' 0.05'
endif
t1 = t1 + 1
endwhile
z1 = z1 + 1
endwhile
**************************************
**********************MODEL3
'open /home/hmkim/phase_layer1_r12_r12/glo/loocv_amp_ensm_post_pro/ec_data/ctrl.phase_comp.ctl'
'open /home/hmkim/phase_layer1_r12_r12/glo/loocv_amp_ensm_post_pro/ec_data/obs.phase_comp.ctl'
'open /home/hmkim/phase_layer1_r12_r12/glo/loocv_amp_ensm_post_pro/ec_data/rnn.phase_comp.ctl'

x0=1.
x1=3.05
y0=3.5
y1=5.5
xs = x1 - x0
ys = y1 - y0
xm = (x0+x1)/2
ym = (y0+y1)/2

'set ccolor 1'
'set strsiz 0.08'
'set string 1 l 3'
'draw string 'x0+0.1' 'y0+0.5' P1'
'draw string 'x0+0.5' 'y0+0.15' P2'
'draw string 'x1-0.5' 'y1-0.15' P6'
'draw string 'x0+0.1' 'y1-0.5' P8'
'set string 1 r 3'
'draw string 'x1-0.1' 'y0+0.5' P4'
'draw string 'x1-0.5' 'y0+0.15' P3'
'draw string 'x0+0.5' 'y1-0.15' P7'
'draw string 'x1-0.1' 'y1-0.5' P5'

'set line 15 1 1'
'draw line 'x0' 'y0' 'x1' 'y1
'draw line 'x0' 'y1' 'x1' 'y0
'run circle.gs 'xm' 'ym'  0.50  360 15'

'set parea  'x0' 'x1' 'y0' 'y1
'set t 1 21'
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
if (z1=1|z1=3|z1=5|z1=7)
'set line 4 1 3'
t1 = 1
t2 = t1 + 27
'set z 'z1
'set t 't1
else
'set t 1'
'set line 4 1 3'
'set z 1'
endif
'define o1= tloop(ave(rmm1.7,t+0,t+2))'
'define o2= tloop(ave(rmm2.7,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 6 'xx' 'yy' 0.05'
t1 = t1 + 1
while (t1<=t2)
'set t 't1
'define o1= tloop(ave(rmm1.7,t+0,t+2))'
'define o2= tloop(ave(rmm2.7,t+0,t+2))'
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
'draw mark 3 'xx' 'yy' 0.05'
endif
t1 = t1 + 1
endwhile
z1 = z1 + 1
endwhile
****OBS****
z1 = 1
z2 = 8
while (z1<=z2)
if (z1=1|z1=3|z1=5|z1=7)
'set line 1 1 3'
t1 = 1
t2 = t1 + 27
'set z 'z1
'set t 't1
else
'set t 1'
'set line 1 1 3'
'set z 1'
endif
'define o1= tloop(ave(rmm1.8,t+0,t+2))'
'define o2= tloop(ave(rmm2.8,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 6 'xx' 'yy' 0.05'
t1 = t1 + 1
while (t1<=t2)
'set t 't1
'define o1= tloop(ave(rmm1.8,t+0,t+2))'
'define o2= tloop(ave(rmm2.8,t+0,t+2))'
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
'draw mark 3 'xx' 'yy' 0.05'
endif
t1 = t1 + 1
endwhile
z1 = z1 + 1
endwhile

****RNN****
z1 = 1
z2 = 8
while (z1<=z2)
if (z1=1|z1=3|z1=5|z1=7)
'set line 2 1 3'
t1 = 1
t2 = t1 + 27
'set z 'z1
'set t 't1
else
'set t 1'
'set line 2 1 3'
'set z 1'
endif
'define o1= tloop(ave(rmm1.9,t+0,t+2))'
'define o2= tloop(ave(rmm2.9,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 6 'xx' 'yy' 0.05'

t1 = t1 + 1
while (t1<=t2)
'set t 't1
'define o1= tloop(ave(rmm1.9,t+0,t+2))'
'define o2= tloop(ave(rmm2.9,t+0,t+2))'
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
'draw mark 3 'xx' 'yy' 0.05'
endif
t1 = t1 + 1
endwhile
z1 = z1 + 1
endwhile

*********** PHASE 2**************

x0=3.5
x1=5.55
y0=3.5
y1=5.5
xs = x1 - x0
ys = y1 - y0
xm = (x0+x1)/2
ym = (y0+y1)/2
'set ccolor 1'
'set strsiz 0.08'
'set string 1 l 3'
'draw string 'x0+0.1' 'y0+0.5' P1'
'draw string 'x0+0.5' 'y0+0.15' P2'
'draw string 'x1-0.5' 'y1-0.15' P6'
'draw string 'x0+0.1' 'y1-0.5' P8'
'set string 1 r 3'
'draw string 'x1-0.1' 'y0+0.5' P4'
'draw string 'x1-0.5' 'y0+0.15' P3'
'draw string 'x0+0.5' 'y1-0.15' P7'
'draw string 'x1-0.1' 'y1-0.5' P5'

'set line 15 1 1'
'draw line 'x0' 'y0' 'x1' 'y1
'draw line 'x0' 'y1' 'x1' 'y0
'run circle.gs 'xm' 'ym'  0.50  360 15'

'set parea  'x0' 'x1' 'y0' 'y1
'set t 1 21'
'set z 1'
'set gxout scatter'
'set digsize 0.01'
'set line 4'
'set ccolor 4'
'set cmark 0'
'd rmm1.4;rmm2.4'
z1 = 1
z2 = 8
while (z1<=z2)
if (z1=2|z1=4|z1=6|z1=8)
'set line 4 1 3'
t1 = 1
t2 = t1 + 27
'set z 'z1
'set t 't1
else
'set t 1'
'set line 4 1 3'
'set z 2'
endif
'define o1= tloop(ave(rmm1.7,t+0,t+2))'
'define o2= tloop(ave(rmm2.7,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 6 'xx' 'yy' 0.05'
t1 = t1 + 1
while (t1<=t2)
'set t 't1
'define o1= tloop(ave(rmm1.7,t+0,t+2))'
'define o2= tloop(ave(rmm2.7,t+0,t+2))'
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
'draw mark 3 'xx' 'yy' 0.05'
endif
t1 = t1 + 1
endwhile
z1 = z1 + 1
endwhile
****OBS****
z1 = 1
z2 = 8
while (z1<=z2)
if (z1=2|z1=4|z1=6|z1=8)
'set line 1 1 3'
t1 = 1
t2 = t1 + 27
'set z 'z1
'set t 't1
else
'set t 1'
'set line 1 1 3'
'set z 2'
endif
'define o1= tloop(ave(rmm1.8,t+0,t+2))'
'define o2= tloop(ave(rmm2.8,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 6 'xx' 'yy' 0.05'
t1 = t1 + 1
while (t1<=t2)
'set t 't1
'define o1= tloop(ave(rmm1.8,t+0,t+2))'
'define o2= tloop(ave(rmm2.8,t+0,t+2))'
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
'draw mark 3 'xx' 'yy' 0.05'
endif
t1 = t1 + 1
endwhile
z1 = z1 + 1
endwhile

****RNN****
z1 = 1
z2 = 8
while (z1<=z2)
if (z1=2|z1=4|z1=6|z1=8)
'set line 2 1 3'
t1 = 1
t2 = t1 + 27
'set z 'z1
'set t 't1
else
'set t 1'
'set line 2 1 3'
'set z 2'
endif
'define o1= tloop(ave(rmm1.9,t+0,t+2))'
'define o2= tloop(ave(rmm2.9,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 6 'xx' 'yy' 0.05'

t1 = t1 + 1
while (t1<=t2)
'set t 't1
'define o1= tloop(ave(rmm1.9,t+0,t+2))'
'define o2= tloop(ave(rmm2.9,t+0,t+2))'
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
'draw mark 3 'xx' 'yy' 0.05'
endif
t1 = t1 + 1
endwhile
z1 = z1 + 1
endwhile
**************************************

**********************MODEL4
'open /home/hmkim/phase_layer1_r12_r12/gefs/loocv_amp_ensm_post_pro/ec_data/ctrl.phase_comp.ctl'
'open /home/hmkim/phase_layer1_r12_r12/gefs/loocv_amp_ensm_post_pro/ec_data/obs.phase_comp.ctl'
'open /home/hmkim/phase_layer1_r12_r12/gefs/loocv_amp_ensm_post_pro/ec_data/rnn.phase_comp.ctl'

x0=1.
x1=3.05
y0=1.0
y1=3.0
xs = x1 - x0
ys = y1 - y0
xm = (x0+x1)/2
ym = (y0+y1)/2
'set ccolor 1'
'set strsiz 0.08'
'set string 1 l 3'
'draw string 'x0+0.1' 'y0+0.5' P1'
'draw string 'x0+0.5' 'y0+0.15' P2'
'draw string 'x1-0.5' 'y1-0.15' P6'
'draw string 'x0+0.1' 'y1-0.5' P8'
'set string 1 r 3'
'draw string 'x1-0.1' 'y0+0.5' P4'
'draw string 'x1-0.5' 'y0+0.15' P3'
'draw string 'x0+0.5' 'y1-0.15' P7'
'draw string 'x1-0.1' 'y1-0.5' P5'


'set line 15 1 1'
'draw line 'x0' 'y0' 'x1' 'y1
'draw line 'x0' 'y1' 'x1' 'y0
'run circle.gs 'xm' 'ym'  0.50  360 15'

'set parea  'x0' 'x1' 'y0' 'y1
'set t 1 21'
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
if (z1=1|z1=3|z1=5|z1=7)
'set line 4 1 3'
t1 = 1
t2 = t1 + 27
'set z 'z1
'set t 't1
else
'set t 1'
'set line 4 1 3'
'set z 1'
endif
'define o1= tloop(ave(rmm1.10,t+0,t+2))'
'define o2= tloop(ave(rmm2.10,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 6 'xx' 'yy' 0.05'
t1 = t1 + 1
while (t1<=t2)
'set t 't1
'define o1= tloop(ave(rmm1.10,t+0,t+2))'
'define o2= tloop(ave(rmm2.10,t+0,t+2))'
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
'draw mark 3 'xx' 'yy' 0.05'
endif
t1 = t1 + 1
endwhile
z1 = z1 + 1
endwhile
****OBS****
z1 = 1
z2 = 8
while (z1<=z2)
if (z1=1|z1=3|z1=5|z1=7)
'set line 1 1 3'
t1 = 1
t2 = t1 + 27
'set z 'z1
'set t 't1
else
'set t 1'
'set line 1 1 3'
'set z 1'
endif
'define o1= tloop(ave(rmm1.11,t+0,t+2))'
'define o2= tloop(ave(rmm2.11,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 6 'xx' 'yy' 0.05'
t1 = t1 + 1
while (t1<=t2)
'set t 't1
'define o1= tloop(ave(rmm1.11,t+0,t+2))'
'define o2= tloop(ave(rmm2.11,t+0,t+2))'
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
'draw mark 3 'xx' 'yy' 0.05'
endif
t1 = t1 + 1
endwhile
z1 = z1 + 1
endwhile

****RNN****
z1 = 1
z2 = 8
while (z1<=z2)
if (z1=1|z1=3|z1=5|z1=7)
'set line 2 1 3'
t1 = 1
t2 = t1 + 27
'set z 'z1
'set t 't1
else
'set t 1'
'set line 2 1 3'
'set z 1'
endif
'define o1= tloop(ave(rmm1.12,t+0,t+2))'
'define o2= tloop(ave(rmm2.12,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 6 'xx' 'yy' 0.05'

t1 = t1 + 1
while (t1<=t2)
'set t 't1
'define o1= tloop(ave(rmm1.12,t+0,t+2))'
'define o2= tloop(ave(rmm2.12,t+0,t+2))'
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
'draw mark 3 'xx' 'yy' 0.05'
endif
t1 = t1 + 1
endwhile
z1 = z1 + 1
endwhile

*********** PHASE 2**************

x0=3.5
x1=5.55
y0=1.0
y1=3.0
xs = x1 - x0
ys = y1 - y0
xm = (x0+x1)/2
ym = (y0+y1)/2

'set ccolor 1'
'set strsiz 0.08'
'set string 1 l 3'
'draw string 'x0+0.1' 'y0+0.5' P1'
'draw string 'x0+0.5' 'y0+0.15' P2'
'draw string 'x1-0.5' 'y1-0.15' P6'
'draw string 'x0+0.1' 'y1-0.5' P8'
'set string 1 r 3'
'draw string 'x1-0.1' 'y0+0.5' P4'
'draw string 'x1-0.5' 'y0+0.15' P3'
'draw string 'x0+0.5' 'y1-0.15' P7'
'draw string 'x1-0.1' 'y1-0.5' P5'


'set line 15 1 1'
'draw line 'x0' 'y0' 'x1' 'y1
'draw line 'x0' 'y1' 'x1' 'y0
'run circle.gs 'xm' 'ym'  0.50  360 15'

'set parea  'x0' 'x1' 'y0' 'y1
'set t 1 21'
'set z 1'
'set gxout scatter'
'set digsize 0.01'
'set line 4'
'set ccolor 4'
'set cmark 0'
'd rmm1.4;rmm2.4'
z1 = 1
z2 = 8
while (z1<=z2)
if (z1=2|z1=4|z1=6|z1=8)
'set line 4 1 3'
t1 = 1
t2 = t1 + 27
'set z 'z1
'set t 't1
else
'set t 1'
'set line 4 1 3'
'set z 2'
endif
'define o1= tloop(ave(rmm1.10,t+0,t+2))'
'define o2= tloop(ave(rmm2.10,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 6 'xx' 'yy' 0.05'
t1 = t1 + 1
while (t1<=t2)
'set t 't1
'define o1= tloop(ave(rmm1.10,t+0,t+2))'
'define o2= tloop(ave(rmm2.10,t+0,t+2))'
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
'draw mark 3 'xx' 'yy' 0.05'
endif
t1 = t1 + 1
endwhile
z1 = z1 + 1
endwhile
****OBS****
z1 = 1
z2 = 8
while (z1<=z2)
if (z1=2|z1=4|z1=6|z1=8)
'set line 1 1 3'
t1 = 1
t2 = t1 + 27
'set z 'z1
'set t 't1
else
'set t 1'
'set line 1 1 3'
'set z 2'
endif
'define o1= tloop(ave(rmm1.11,t+0,t+2))'
'define o2= tloop(ave(rmm2.11,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 6 'xx' 'yy' 0.05'
t1 = t1 + 1
while (t1<=t2)
'set t 't1
'define o1= tloop(ave(rmm1.11,t+0,t+2))'
'define o2= tloop(ave(rmm2.11,t+0,t+2))'
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
'draw mark 3 'xx' 'yy' 0.05'
endif
t1 = t1 + 1
endwhile
z1 = z1 + 1
endwhile

****RNN****
z1 = 1
z2 = 8
while (z1<=z2)
if (z1=2|z1=4|z1=6|z1=8)
'set line 2 1 3'
t1 = 1
t2 = t1 + 27
'set z 'z1
'set t 't1
else
'set t 1'
'set line 2 1 3'
'set z 2'
endif
'define o1= tloop(ave(rmm1.12,t+0,t+2))'
'define o2= tloop(ave(rmm2.12,t+0,t+2))'
'd o1'
x=subwrd(result,4)
'd o2'
y=subwrd(result,4)
'q w2xy 'x' 'y
xx=subwrd(result,3)
yy=subwrd(result,6)
'draw mark 6 'xx' 'yy' 0.05'

t1 = t1 + 1
while (t1<=t2)
'set t 't1
'define o1= tloop(ave(rmm1.12,t+0,t+2))'
'define o2= tloop(ave(rmm2.12,t+0,t+2))'
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
'draw mark 3 'xx' 'yy' 0.05'
endif
t1 = t1 + 1
endwhile
z1 = z1 + 1
endwhile
**************************************
'enable print case.gx'
'print'
'disable print'
'!gxps -c -i case.gx -o ./fig/supp_fig1.phase_comp2.ps'
