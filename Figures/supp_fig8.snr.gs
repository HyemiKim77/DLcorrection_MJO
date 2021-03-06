'reinit'

'open ./response/ecmwf/ctrl.snr.ctl'
'open ./response/ecmwf/rnn.snr.ctl'

'set strsiz 0.16'
'set string 1 l 4'
'draw string 0.5 10.25 Signal and noise: ECMWF-Cy43r3'
'draw string 3. 5.6 Forecast lead days'
'set strsiz 0.14'
'set string 4 l 6'
'draw string 6.1 9.3 ECMWF-Cy43r3'
'set string 2 l 6'
'draw string 6.1 9.6 DL'

'set xlopts 1 3 0.13'
'set ylopts 1 3 0.13'
'set grads off'
'set ylint 1'
'set vrange -0.1 3.3'
'set t 1 29'
'set xaxis 0 28  7'

'set parea 0.5 8 6 10.'
'set cthick 6'
'set ccolor 4'
'set cmark 0'
'd sig.1'
'set ccolor 4'
'set cmark 0'
'set cstyle  2'
'd noi.1'

'set cmark 0'
'set ccolor 2'
'd sig.2'
'set cstyle  2'
'set cmark 0'
'set ccolor 2'
'd noi.2'

'enable print case.gx'
'print'
'disable print'
'!gxps -c -i case.gx -o ./fig/supp_fig8.snr.ps'
