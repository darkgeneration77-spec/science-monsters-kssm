const stages=[
{title:'Power Station',enemy:'Static Slime',icon:'⚡',qs:[
['Which object becomes positively charged after losing electrons?','失去电子后，物体带什么电？',['Negatively charged','Positively charged','Neutral','Magnetic'],1,'Losing electrons leaves more protons, so the object is positively charged.'],
['Like electric charges will…','同种电荷会怎样？',['attract','repel','disappear','become neutral'],1,'Like charges repel; unlike charges attract.'],
['Which material is commonly an electrical insulator?','哪一种材料通常是绝缘体？',['Copper','Iron','Rubber','Aluminium'],2,'Rubber does not allow electric current to flow easily.'],
['A charged ruler attracts tiny paper pieces due to…','带电尺吸引小纸片是由于什么？',['gravity','electrostatic force','friction only','magnetism'],1,'The attraction is caused by electrostatic force.'],
['Which device protects buildings from lightning?','哪一种装置保护建筑物免受雷击？',['Ammeter','Lightning conductor','Voltmeter','Fuse wire'],1,'A lightning conductor provides a safe path for charge to Earth.'],
['BOSS: State the safest action during a thunderstorm.','Boss：雷雨时最安全的做法是什么？',['Stand under a tree','Hold a metal pole','Stay inside a building','Swim'],2,'Stay inside a building and avoid exposed metal objects.'],
['BOSS: Earthing removes excess charge by transferring it to…','Boss：接地把多余电荷传到哪里？',['the Moon','Earth','a battery','a magnet'],1,'Earthing transfers excess electric charge safely to Earth.']]},
{title:'Current River',enemy:'Current Eel',icon:'≈',qs:[
['Electric current is the rate of flow of…','电流是何种粒子的流动率？',['mass','charge','heat','light'],1,'Electric current is the rate of flow of electric charge.'],
['The SI unit of electric current is…','电流的国际单位是？',['volt','ohm','ampere','coulomb'],2,'Current is measured in ampere, A.'],
['Which instrument measures electric current?','哪一种仪器测量电流？',['Voltmeter','Ammeter','Thermometer','Barometer'],1,'An ammeter measures electric current.'],
['An ammeter is connected…','电流表怎样连接？',['in parallel','in series','outside the circuit','to Earth only'],1,'An ammeter must be connected in series.'],
['Conventional current flows from…','传统电流方向从哪里到哪里？',['negative to positive','positive to negative','Earth to battery','bulb to switch only'],1,'Conventional current flows from the positive terminal to the negative terminal.'],
['BOSS: If more charge flows each second, current becomes…','Boss：每秒流过的电荷增加，电流会怎样？',['smaller','larger','zero','unchanged'],1,'More charge per second means a larger current.'],
['BOSS: Which circuit condition allows current to flow?','Boss：哪一种电路状态允许电流流动？',['Open circuit','Complete circuit','Broken wire','Open switch'],1,'Current flows only through a complete circuit.']]},
{title:'Resistance Factory',enemy:'Ohm Golem',icon:'Ω',qs:[
['Voltage is measured using a…','电压使用什么仪器测量？',['ammeter','voltmeter','balance','stopwatch'],1,'A voltmeter measures potential difference.'],
['A voltmeter is connected…','电压表怎样连接？',['in series','in parallel','without wires','to one terminal only'],1,'A voltmeter is connected in parallel across a component.'],
['The SI unit of resistance is…','电阻的国际单位是？',['ampere','volt','ohm','watt'],2,'Resistance is measured in ohm, Ω.'],
['A longer wire usually has… resistance.','较长的电线通常有怎样的电阻？',['lower','higher','zero','no'],1,'A longer wire gives more opposition to current.'],
['A thicker wire usually has… resistance.','较粗的电线通常有怎样的电阻？',['higher','lower','infinite','unchanged'],1,'A thicker wire provides more paths for charge, so resistance is lower.'],
['BOSS: Increasing resistance while voltage stays constant causes current to…','Boss：电压不变而电阻增加，电流会怎样？',['increase','decrease','stay zero forever','double'],1,'Higher resistance reduces current.'],
['BOSS: Which material is a good conductor?','Boss：哪一种材料是良好导体？',['Plastic','Glass','Copper','Rubber'],2,'Copper allows current to flow easily.']]},
{title:'Circuit City',enemy:'Circuit Dragon',icon:'⌁',qs:[
['In a series circuit, current is… at all points.','串联电路中，各处电流怎样？',['different','the same','always zero','unmeasurable'],1,'A series circuit has one path, so current is the same throughout.'],
['If one bulb breaks in a series circuit…','串联电路中一个灯泡坏了会怎样？',['others stay on','all bulbs go off','current increases','battery disappears'],1,'The single path is broken, so all bulbs go off.'],
['A parallel circuit has…','并联电路具有什么？',['one path only','more than one path','no switch','no current'],1,'Parallel circuits provide multiple paths.'],
['If one bulb breaks in a parallel circuit…','并联电路中一个灯泡坏了会怎样？',['all go off','other branches can still work','battery melts','voltage becomes zero everywhere'],1,'Other branches remain complete.'],
['Adding more cells in series generally makes a bulb…','串联增加电池通常使灯泡怎样？',['dimmer','brighter','colder only','magnetic'],1,'More cells provide a larger potential difference.'],
['BOSS: Household wiring uses mainly… circuits.','Boss：家庭电路主要使用哪种连接？',['series','parallel','open','broken'],1,'Parallel wiring lets appliances operate independently.'],
['BOSS: Which circuit gives each bulb a separate path?','Boss：哪种电路让每个灯泡有独立路径？',['Series','Parallel','Open','Short only'],1,'Parallel circuits have separate branches.']]},
{title:'Magnet Fortress',enemy:'Magnetron',icon:'N',qs:[
['Like magnetic poles…','同名磁极会怎样？',['attract','repel','melt','lose mass'],1,'Like poles repel.'],
['Unlike magnetic poles…','异名磁极会怎样？',['repel','attract','become neutral','produce heat only'],1,'Unlike poles attract.'],
['The magnetic field is strongest at the…','磁场在哪里最强？',['centre only','poles','air far away','handle'],1,'Magnetic field lines are most concentrated near the poles.'],
['Which material is attracted strongly by a magnet?','哪一种材料会被磁铁强烈吸引？',['Iron','Plastic','Wood','Glass'],0,'Iron is a magnetic material.'],
['An electromagnet needs…','电磁铁需要什么？',['electric current','sunlight only','water','friction only'],0,'Current in a coil produces a magnetic field.'],
['BOSS: How can an electromagnet be made stronger?','Boss：怎样增强电磁铁？',['Use fewer coil turns','Reduce current','Add more coil turns','Remove the iron core'],2,'More turns produce a stronger magnetic field.'],
['FINAL BOSS: A scrapyard crane uses an electromagnet because it can be…','最终Boss：废铁场起重机使用电磁铁，因为它可以怎样？',['switched on and off','made of plastic','used without current','permanently weak'],0,'The current can be switched on to lift metal and off to release it.']]}
];
const $=id=>document.getElementById(id);let si=0,qi=0,xp=0,hp=100,correct=0,locked=false,review=[];
function allQuestions(){return stages.reduce((a,s)=>a+s.qs.length,0)}
function buildMap(){const m=$('stageMap');m.innerHTML='';stages.forEach((s,i)=>{const n=document.createElement('div');n.className='stage-node '+(i<si?'done':i===si?'active':'');n.textContent=i+1;m.appendChild(n);if(i<stages.length-1){const l=document.createElement('div');l.className='stage-line';m.appendChild(l)}})}
function render(){locked=false;buildMap();const s=stages[si],q=s.qs[qi];$('hudStage').textContent=si+1;$('hudXp').textContent=xp;$('hudHp').textContent=hp;$('stageLabel').textContent=`STAGE ${si+1}`;$('stageTitle').textContent=s.title;$('counter').textContent=`${qi+1} / ${s.qs.length}`;$('enemyName').textContent=s.enemy;$('enemyAvatar').textContent=s.icon;$('question').textContent=q[0];$('questionZh').textContent=q[1];$('feedback').className='feedback hidden';$('answers').innerHTML='';q[2].forEach((c,i)=>{const b=document.createElement('button');b.textContent=`${String.fromCharCode(65+i)}. ${c}`;b.addEventListener('click',()=>answer(i));$('answers').appendChild(b)});$('playerHpBar').style.width=hp+'%';$('enemyHpBar').style.width=((s.qs.length-qi)/s.qs.length*100)+'%'}
function beep(ok){try{const C=window.AudioContext||window.webkitAudioContext,c=new C(),o=c.createOscillator(),g=c.createGain();o.frequency.value=ok?720:170;g.gain.value=.05;o.connect(g);g.connect(c.destination);o.start();g.gain.exponentialRampToValueAtTime(.001,c.currentTime+.25);o.stop(c.currentTime+.26)}catch(e){}}
function answer(i){if(locked)return;locked=true;const q=stages[si].qs[qi],ok=i===q[3];beep(ok);if(ok){correct++;xp+=100;$('attackFx').classList.remove('hidden');setTimeout(()=>$('attackFx').classList.add('hidden'),450)}else{hp=Math.max(0,hp-15);review.push(`${stages[si].title}: ${q[1]}`)}[...$('answers').children].forEach((b,j)=>b.className=j===q[3]?'correct':j===i?'wrong':'dim');$('feedback').className='feedback '+(ok?'good':'bad');$('feedbackTitle').textContent=ok?'SUPER EFFECTIVE! +100 XP':'MONSTER ATTACK! -15 HP';$('explanation').textContent=q[4];$('hudXp').textContent=xp;$('hudHp').textContent=hp;$('playerHpBar').style.width=hp+'%'}
function next(){qi++;if(qi>=stages[si].qs.length){si++;qi=0;hp=Math.min(100,hp+25)}if(si>=stages.length)return finish();render()}
function start(){si=0;qi=0;xp=0;hp=100;correct=0;review=[];$('startScreen').classList.add('hidden');$('resultScreen').classList.add('hidden');$('gameScreen').classList.remove('hidden');render()}
function finish(){$('gameScreen').classList.add('hidden');$('resultScreen').classList.remove('hidden');$('finalXp').textContent=xp;$('finalCorrect').textContent=`${correct}/${allQuestions()}`;$('finalRank').textContent=correct>=32?'SCIENCE MASTER':correct>=25?'GRID GUARDIAN':correct>=18?'SPARK EXPLORER':'ROOKIE';}
$('startBtn').addEventListener('click',start);$('restartBtn').addEventListener('click',start);$('nextBtn').addEventListener('click',next);