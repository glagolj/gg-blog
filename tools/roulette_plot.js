/********************************************************************************/
/********************************************************************************/
/********************************************************************************/
var canvas = document.getElementById('main');
var ctx = canvas.getContext('2d');
var params=document.params;
var frqs_in=document.frqs;

var n0=96;
var n1=80;
var n2=40;
var n3=32;
var h=0.4;
var p=0.8;
var phi=0;

var win=600;
var pltmax=99;

var T1=1;
var T3=1;
var T=1;
var nsymm=1;
var hole=0.01;

var modulo_mm = 1.0/50.0 * 27.07;  /* =0.54140000 */

var pt_dens = 512; /* =~ plot density */

var linwid = 1;

var xmax,ymax;

/********************************************************************************/
function canvas_resize()
{
  win = Math.min( window.innerWidth-30, window.innerHeight-200 );
  canvas.width  = win;
  canvas.height = win;


  ctx.setTransform( 1,0,0,1,0,0 );
  ctx.setTransform( 0, -win/2.0/pltmax, -win/2.0/pltmax, 0, win/2.0, win/2.0 ); 
}
/********************************************************************************/
function get_params()
{
  n0 = Math.round( Math.abs( params.p_n0.value ) );
  params.p_n0.value = n0;

  n1 = Math.round( Math.abs( params.p_n1.value ) );
  params.p_n1.value = n1;

  n2 = Math.round( Math.abs( params.p_n2.value ) );
  params.p_n2.value = n2;

  n3 = Math.round( Math.abs( params.p_n3.value ) );
  params.p_n3.value = n3;

  pltmax = Math.max(n0,n1,n2,n3) * 1.05;

  linwid = 2 * pltmax / 250.0;

  h = params.p_h.value;
  var h_max=0.975 * ( 1 - n2 / n1 );
  if( h < -h_max ){
    h = -h_max;
    params.p_h.value = h;
  }
  if( h > h_max ){
    h = h_max;
    params.p_h.value = h;
  }

  hole = Math.abs( params2.p_hole.value / 2.0 / modulo_mm );

  p   = params.p_p.value;
  if( hole != 0 ){
    var p_min = 1.0 - hole/n3;
    if( p < 0 || p > p_min ){
      p = p_min;
      params.p_p.value = p;
    }
  }

  phi = params.p_phi.value / 180.0 * Math.PI;


  var a = n1 / js_gcd(n0,n1);
  var b = n1 * n3 / js_gcd( n0*n2, n1*n3 );
  T  = js_lcm( a, b );
  T1 = ( T * n0 ) / n1;
  T3 = ( T * n0 * n2 ) / (n1 * n3);
  nsymm = js_gcd( T1, T3 );

  frqs_in.fin_T1.value = T1;
  frqs_in.fin_T3.value = T3;
  frqs_in.fin_T.value = T;
}
/********************************************************************************/
function sr_plot_circles()
{
  ctx.lineWidth=0.5 * linwid;

  ctx.strokeStyle = "rgb(34,112,42)";
  ctx.fillStyle = "rgb(152,253,138)";
  ctx.beginPath();
  ctx.arc(0,0,n0, 0, 2 * Math.PI, false);
  ctx.moveTo(n0+10,0);
  ctx.arc(0,0,n0+10, 2 * Math.PI, 0, true);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  ctx.strokeStyle = "rgb(129,90,33)";
  ctx.fillStyle = "rgb(244,227,202)";
  ctx.beginPath();
  ctx.arc(n0-n1,0, n1, 0, 2 * Math.PI, false);
  ctx.moveTo(n0-n1+n1*h+n2,0);
  ctx.arc(n0-n1+n1*h,0,n2, 2 * Math.PI, 0, true);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  var xc = n0-n1+n1*h + n2 -n3;
  var yc = 0;

  ctx.strokeStyle = "rgb(46,106,112)";
  ctx.fillStyle = "rgb(136,247,249)";
  ctx.beginPath();
  ctx.arc(xc,yc,n3, 0, 2 * Math.PI, false);
  xc += p*n3*Math.cos(phi);
  yc += p*n3*Math.sin(phi);
  ctx.moveTo(xc+hole,yc);
  ctx.arc(xc,yc,hole, 2 * Math.PI, 0, true );
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  ctx.strokeStyle = "rgb(124,26,244)";
  ctx.beginPath();
  ctx.arc(xc,yc,hole, 0, 2 * Math.PI, false);
  ctx.stroke();
  ctx.closePath();
}
/********************************************************************************/
function sr_show_nfo()
{
  ctx.save();

  ctx.strokeStyle = "black";
  ctx.fillStyle = "black";
  ctx.font = '12px sans-serif';
  ctx.setTransform( 0, -1,1,0, 0,win );
  ctx.fillText('glagolj.github.io/gg-blog/tools/roulette_plot.html',10,win-6);
  



  ctx.setTransform( 1, 0,0,1, 0,0 );
  ctx.font = '24px sans-serif';
  var str = '('+n0.toString()+':'+n1.toString()+';'+n2.toString()+':'+n3.toString()+')';
  ctx.fillText(str,4,32);
  str = 'F=('+T1.toString()+'/'+T.toString()+','+T3.toString()+'/'+T.toString()+')';
  ctx.fillText(str,4,win-4);
  
  ctx.restore();

  document.getElementById('res_F').innerHTML = ' F=('+T1.toString()+'/'+T.toString()+','+T3.toString()+'/'+T.toString()+')';
  document.getElementById('res_symm').innerHTML = ' n<sub>symm</sub>='+nsymm.toString();
  document.getElementById('frqs_input_error').innerHTML = '.';

  if(1){
    var nh    = js_gcd( T1, T );
    var n0scl = T1 / nh;
    var n1scl = T  / nh;
    var n2scl = T3 / nsymm;
    var n3scl = T1 / nsymm;
    document.getElementById('tmp_v0').innerHTML = 'n0='+n0scl.toString()+'a';
    document.getElementById('tmp_v1').innerHTML = 'n1='+n1scl.toString()+'a';
    document.getElementById('tmp_v2').innerHTML = 'n2='+n2scl.toString()+'b';
    document.getElementById('tmp_v3').innerHTML = 'n3='+n3scl.toString()+'b';
  }
}
/********************************************************************************/

function sr_update_plot()
{
  get_params();
  canvas_resize();

  /* ctx.clearRect(0, 0, canvas.width, canvas.height); */
  if( params2.show_circles.checked ){
    sr_plot_circles();
  }
  sr_show_nfo();

  ctx.lineWidth = 1 * linwid;

  var i;
  var tend = T * 2 * Math.PI;
  var npts = T * pt_dens;
  var m0   = n0 / n1;
  var m1   = n2 / n3;

  xmax = 0;
  ymax = 0;
  var rsav = 0;

  var jcurv;
  var ncurv = params2.show_f0.checked ? 2 : 1;
  ctx.strokeStyle = 'black';

  for( jcurv=0 ; jcurv < ncurv ; jcurv++ ){
    if( jcurv > 0 ){
      ctx.strokeStyle = 'yellow';
    }
    ctx.beginPath();
    var rp = jcurv > 0 ? 0 : n3*p;

    for( i=0 ; i<=npts ; i++ ){
      var t  = i * tend / npts;
      var t1 = m0 * t;
      var t2 = t1 + Math.atan2(  h*Math.sin(t1), 1.0 - h*Math.cos(t1) );
      var t3 = m1 * t2;
      var a0 = t  - t1;
      var a1 = a0 + t2 - t3 + phi;

      var x = (n0-n1)*Math.cos(t) + n1*h*Math.cos(a0) + (n2-n3)*Math.cos(a0+t2) + rp*Math.cos(a1);
      var y = (n0-n1)*Math.sin(t) + n1*h*Math.sin(a0) + (n2-n3)*Math.sin(a0+t2) + rp*Math.sin(a1);
    
      if(hole != 0){
	var xt = (n0-n1)*Math.cos(t) + n1*h*Math.cos(a0) + n2*Math.cos(a0+t2);
	var yt = (n0-n1)*Math.sin(t) + n1*h*Math.sin(a0) + n2*Math.sin(a0+t2);
	var ang = Math.atan2( yt-y, xt-x );
	x += hole * Math.cos(ang);
	y += hole * Math.sin(ang);
      }

      var r = x*x + y*y;
      if( r > rsav ){
	rsav = r;
	xmax = x;
	ymax = y;
      }

      if( i == 0 ){
	ctx.moveTo(x,y);
      }
      else{
	ctx.lineTo(x,y);
      }
    }
    ctx.stroke();
    ctx.closePath();

  }
  ctx.strokeStyle = 'black';

  if( params2.show_symm.checked && nsymm > 1 ){
    ctx.strokeStyle = 'gray';
    ctx.beginPath();
    var ang = Math.atan2( ymax, xmax );
    var rmax = Math.sqrt( xmax*xmax + ymax*ymax )
    for( i=0 ; i<nsymm ; i++ ){
      var r = Math.max( 1.1*rmax, 1.1 * n0 );
      ctx.moveTo(0,0);
      ctx.lineTo(r*Math.cos(ang+i*2*Math.PI/nsymm),r*Math.sin(ang+i*2*Math.PI/nsymm));
    }
    ctx.stroke();
    ctx.closePath();
  }  
  ctx.strokeStyle = 'black';
}
/********************************************************************************/
/********************************************************************************/
/********************************************************************************/
function srset(in_n0,in_n1,in_n2,in_n3,in_h,in_p){
  params.p_n0.value = in_n0;
  params.p_n1.value = in_n1;
  params.p_n2.value = in_n2;
  params.p_n3.value = in_n3;
  params.p_h.value = in_h;
  params.p_p.value = in_p;
  params.p_phi.value = 0;
  params2.p_hole.value = 3;

  sr_update_plot();
}
/********************************************************************************/
/********************************************************************************/
/********************************************************************************/
function sr_frqs_update(){
  var in_T1 = Math.round( Math.abs( frqs_in.fin_T1.value ) );
  var in_T3 = Math.round( Math.abs( frqs_in.fin_T3.value ) );
  var in_T  = Math.round( Math.abs( frqs_in.fin_T.value ) );
  
  if( in_T1 >= in_T3 || in_T >= in_T1 ){
    document.getElementById('frqs_input_error').innerHTML = 'ERROR: must be T&ltT1&ltT3';
    return;
  }
  document.getElementById('frqs_input_error').innerHTML = '.';

  var c  = js_gcd( js_gcd( in_T1, in_T3 ), in_T );
  in_T1 /= c;
  in_T3 /= c;
  in_T  /= c;


  var ns = js_gcd( in_T1, in_T3 );
  var nh = js_gcd( in_T1, in_T  );

  var bmin  = Math.ceil( 8 * ns / (in_T3 - in_T1 ) ); /* at least 8 teeth difference! */
  var b     = Math.max( bmin, 1, Math.ceil( 12 * ns / in_T1 ) );
  var in_n3 = ( b * in_T1 ) / ns;
  var in_n2 = ( b * in_T3 ) / ns;

  var in_n0;
  var in_n1 = in_n2 * 2;
  var amin  = Math.ceil( 8 * nh / (in_T1 - in_T ) ); /* at least 8 teeth difference! */
  var a     = Math.max( amin, 1, Math.ceil( nh * in_n1 / in_T ) );
  in_n1 = ( a * in_T  ) / nh;
  in_n0 = ( a * in_T1 ) / nh;
  
  /*
  document.getElementById('tmp_v0').innerHTML = a.toString();
  document.getElementById('tmp_v1').innerHTML = b.toString();
  document.getElementById('tmp_v2').innerHTML = ns.toString();
  document.getElementById('tmp_v3').innerHTML = nh.toString();
  */

  params.p_n0.value = in_n0;
  params.p_n1.value = in_n1;
  params.p_n2.value = in_n2;
  params.p_n3.value = in_n3;
  
  sr_update_plot();
}
/********************************************************************************/
/********************************************************************************/
/********************************************************************************/
function sr_save_image()
{
  /* https://stackoverflow.com/questions/11112321/how-to-save-canvas-as-png-image */
  var str = '('+n0.toString()+':'+n1.toString()+';'+n2.toString()+':'+n3.toString()+')';
  var dataURL = canvas.toDataURL("image/png");
  var newTab = window.open('about:blank',str);
  newTab.document.write("<img src='" + dataURL + "' alt='"+str+"'/>");
}
/********************************************************************************/
/********************************************************************************/
/********************************************************************************/
function js_gcd(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}
function js_lcm(x, y) {
  return x * y / js_gcd(x, y);
}
/********************************************************************************/
sr_update_plot();

