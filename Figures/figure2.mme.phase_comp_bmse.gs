'reinit'

'reinit'
'set rgb 37 17  24  78'
'set rgb 36 27  44  98'
'set rgb 35 34  80  153'
'set rgb 34 70  139 200'
'set rgb 33 122 191 232'
'set rgb 32 179 226 248'
'set rgb 31 223 242 250'

'set rgb 20 255 255 255'
'set rgb 20 255 255 255'
'set rgb 41 253 240 180'
'set rgb 42 253 201 94'
'set rgb 43 250 144 46'
'set rgb 44 235 84  41'
'set rgb 45 200 29  38'
'set rgb 46 146 21  25'
'set rgb 47 100 15  15'

'open /home/hmkim/phase_layer1_r12_r12/anal/loocv/data/mme.ctrl_phase_error.ctl'
'open /home/hmkim/phase_layer1_r12_r12/anal/loocv/data/mme.rnn_phase_error.ctl'

'set strsiz 0.14'
'set string 1 l 4'
'draw string 3. 10.8 Multi-model BMSE'
'draw string 3. 5.65 Forecast lead days'
'draw string 0.45 10.5 a. S2S_BMSEa'
'draw string 4.45 10.5 b. S2S_BMSEp'
'draw string 0.45  8.0 c. DL_BMSEa'
'draw string 4.45  8.0 d. DL_BMSEp'
'set strsiz 0.13'
'set string 1 l 4 90'
'draw string 0.15 8.8 MJO phase'
'set string 1 l 4 0'

'set xlopts 1 3 0.12'
'set ylopts 1 3 0.12'
'set grads off'
'set grid off'
'set ylint 1'
'set vrange 0.0 3.5'
'set z 1 8'
'set t 1 29'
'set xaxis 0 28 7'
'set gxout shaded'

'define cp= tloop(ave(bmsep.1,t+0,t+2))'
'define rp= tloop(ave(bmsep.2,t+0,t+2))'
'define ca= tloop(ave(bmsea.1,t+0,t+2))'
'define ra= tloop(ave(bmsea.2,t+0,t+2))'

'set parea 0.5 4   8.5 10.3'
'set clevs   1.0 2  4  6 8 10 12'
'set ccols   20 41 42 43 44 45 46 47'
'd ca*100'
'run /home/hmkim/gs/cbarn.gs 0.75 0 4.1 5.3'

'set parea 4.5 8   8.5 10.3'
'set clevs   1.0 2  4  6 8 10 12'
'set ccols   20 41 42 43 44 45 46 47'
'd cp*100'

'set parea 0.5 4  6 7.8'
'set clevs   1.0 2  4  6 8 10 12'
'set ccols   20 41 42 43 44 45 46 47'
'd ra*100'

'set parea 4.5 8  6 7.8'
'set clevs   1.0 2  4  6 8 10 12'
'set ccols   20 41 42 43 44 45 46 47'
'd rp*100'

'enable print case.gx'
'print'
'disable print'
'!gxps -c -i case.gx -o ./fig/figure2.mme.phase_comp.bmse.ps'
