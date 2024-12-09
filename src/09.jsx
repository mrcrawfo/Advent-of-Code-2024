const demoInput = '2333133121414131402';

const testInput = '9883356733752069656661181949779760668336947879672334631498492012279248564815678743918257448799319394268097164282313431712170232427711341278448916123555398963258649192254954428653124048627490363654445098463746705264577434331872739013223257852686325396697166785638826129755245235190709399598738659344508060635161185663324868573885182433469142265019784585737647295954667470632356552310324986978582442373946683324324964975714411442032304368571210978040452375554437723241626980594046753116656563509033582217499974991050134612298676291437298830232670458958219114171954451027352367739620478811495628756386541454713737366356111396226531647796778156447213557264103125841191713843757879301825505533453412476928891777791351737361271824619255577975586534476383753744919060501896538114501577965998706141772971209530162029611212394330506366554760555985142486615059863665687038214179699497301518671235225039492252152831716676249276459715873878384073464072107130115017397861339839974612262240665898961586771878531734607833716543388957148829186678512928177033946090629333529733506188186491613897795746195676809483647332656452184268453163657020142050372765496336683247811884935692201117801592269834244542309222751840604155598822227798309394498363764883786862121857736540788261474227727573412175921075911613378269583723493564169193703048107587824874507062172662316199464348924079568980207043197747731699644026757735542726813181286644228218672046427990847221832377789165397153394375317488763889333787123219407819215168529579908731886226239268502975706487441416997356682064305998636328307113664355564840868361978472573841164836852638262380254558998276331311259321936449351314839691926943221768453235649270701181576626894059389974499339646710732716693944726670597014216317455536154850912570211723421084726837163066678451494298835856395177169799446984621942806126353719503476824664397994141971252455842399737184857680309555968583267395151918467779142081885016329640358734318651614815274714217361819541411245482744942727223724341036719762295093691593943642695981904245811763931437506664169019253386477962205615978146656122809239164153984041695920788386152526156651567161529613461075949987112434688430577931309566169938658238131388748673502393192966732727669176892230919335512042768019752490429924614995548790485236919892572581165918181889945981625991679388139740392886185070704069391458729396629064967719294157985428512749485068703151629444515826641465363794311668907458547074287419227448154297192011603664309292416178131683644752872050258037223667895571881735267731619682303693113966616892347897586716546532647515254969203958682032224086613534856095312173392176821627487358438155926690388994175855839248259592583158115924176581194228135144321212144612404814173818165971197080324010425577891463533490228555831854329959177368166973665428489143193498369966397039974022459115212827302769786335383711753289878858888347477763603116959748371911358872941047169133943230873983851190696084753533987563447044225998578548836074893487135550728570221787647980451277456271891871624638884052965468227916727087869861795555886885968159474793392795528716972474306285699940177438694265557321776690614226501349518145887036414862424271735173151666215396509958697963466163651799397415229168111121912551489570394885715344189110112361282433604124163632175357526337118452132159963182341630539680977021753880579239457089551634994026538289663528325339236328152566952086836038905324227172132834124329594591191923629950743453145992306064672222762235807963593817695660515172482489453688919570595591433751273030183683714995478755667593325936204584941326969197226471128682728999845978288190492744518431783416339478743290182163593658604157792595274347414386866048553430198923828336873693295851831465287047112486725349632081905333758331119996211127566234502295418282558161312537781738584112391614856516295872955898538881702494502275922438131954803275957973305149586967106220974672724018361192186118906128163176626674873244874518431436966840218178724296142054642332557418129132414956123214407158419679596279181341745495813039235143194037441769115217676181107224378686288044659623815988405093577141274491494270284546184583747873214053423324458846314462282862392472318084336060531738151829485076295782113040501365477364524166505660316865952326609661798143592651341054228799358817759077687559318451287829184584385093763848924720114437615427904852166522586453549189178513691669963062202377767713866084969138581221644642388399515572532717438159263432583293559754549669296578758984347086627546465729605425905342101995416573335592158918466882541643249199901697467353472250175852479938791414295165433144796691478486471251301526439296744457536479351413254751913262292810401851177040286959929252685979462173928453424181742375153072621370196987618980939081678477621248512397161496561374797886371885134691398185204413863348846133589520134176681445787399786095818933664384183427582728461416372811364896875186814192397537182244209297699374782329548370982283244568347180377438697436769588211147489572225869289915678735405977955611786722962839425875896145836157532148177590323673661595675760398879674958588684941757527660131284495090587120429395916753595621718487925288324276511897387259894614543017155269757980165877386816289598581129741553826921279815849997601295477318217671633886459583199792664652792237553557298879911191726664957522628280488559609331673161471215491261656077833025156243223613651267812936647915922771602291878249426456657170877766652440119725798137236697446243623747952092198298491293717551344060899159934356754713287233988775597913407833832821517710207972896154637773949752549652316350784061433763175887354294973443432075491063295635718679865271717197692751216898466464977727373035735337619642315897228286778046935972676291157094792637486367344697926164362672118840126234222022167810474828404259701635339838619688621165477773519813975974119050657962471951967662135826361927674365912932544210327883394764742693492498358639797913793165675220263267764515187896594166988398323144988844332310409276448397888411314185882019538359434410898991975023609032111767196983746852191727117694312525529312979422563983596667231244735696227768231823394254706367861427999915841574871739502958495024921482375264347725117418369250437463793329785224905992684494976994345413663252629190526169492437863027811827395072638493319834411679973598833926917635318230847549926486984555575936265161249083679957775878456430244885781189527810586767371570268733339614916325492498722861462145144585172083785627558451569647242372647113602570963095195526251747743377484637208429169391841791576577821548784743847045603848253573396726986010488485724511296317779148953279124572734961525144663788541031829439328485764236389524725750574924955224512159226810741863167669289751303648851248799554104765601536179821872419916433506936555193536661706634688039295915461836968769163994341118639640919795404147933484583999255262835130509610115293919094802334531636491840487441956648269753906091548766333284886769567419576499547484957039103052141481667125596671194617264176102970392179201337564770912210943015203357549427894822516880757125855017481690143193859769698923759315353860205477764052446110158873208167146159773031609545598613924922403957894319914486214276285373267931326517925796713440119530959681465422502431124787407210719016601289473011936960634435865472728412594038314377371629989325451260597040987079419244216625219042928049436462823767396545627662384468208636911356935412866488682223105098704351917686462317462737495078259533819724563196142740383870838970398824897218624563153918243444288932986299583879434777872728797391951096517361157031975220487824964765206833417591584320413070957565462750869468118068739887353356173251883879564991782334983239994675671187964648348746364977932941578098106497518274593629998739452867233724301617247747461181675033569757405914624084617431304688551663802455601699952448718537227028642394647845875030162873474155787570389232502111833053786758397197444912285715931641452866459016135571438420905596182318851743513973274885643988767539699913422282465984693031233445641547432292324497816881584881921455407546983543982744914223211481551713388590165443467143836213704116936644913234302732419476714536653492541650193538583766675980411225258388904469808333548776389373554798162057953994187749792157721191417115879418923652566924322175113370123291248866131934728030871129273756323138454526744397714477164662678170266767207738141737322444457262818889918657723047277336639311422661292245415664665679939720685089986275972755469876619265807572869691812540143116946188305772525451984316529142943847739769364089668278532341472668899964548671801677547655284524691522845863907661332425473048796291529060104646943543242644785993667484604322619926714135363664242234797818669825284349641067348834638825937976531164702993654755267026468028282322151318323383544912891799584927419399711257932820524019511648983147707319416212138761983179614075947884513751587480556343267138511220492730932194903095129997865667752025896178168778312769676973313741946364158284663676712581126191594749456696356943982985719792718120283071634894639782876384942619186629285514244646446276811559585938784996513539217080497590264040595468899471826313528045222311973659136224168474477073263710714312401516298752783723733132576294375148917549801687247725786096953910635612158423264026364767401629672977142824675884437978818877532650467813881335887184169897801949479139561121557374714268112312199674693378383123551841124152525635831483769084201285222988529225526427724820512611976717757032616330475269684298802332721518172382643261568798115759763674218539933065288769882029276526988932997439668829252573177698311294149983775050129494971332155834229542614384614363789299582468619481794753538878237078822093177480229616893650739618186560477853494015808190999386187221112835682661778530254353528145929646747070418588992874869834336747784160803639119869908434708286816737919416936766484365789961689581202667178412841418237921974335931834162381924495532571303286135047781690531425403085662520734974325720961919706653973438432277444132257635723236242481571736157614721619937912946235708370677284684287286862917742881055988327311457301546778244851128724568533537594138537178639297353880705637612885877136336013214118283975679792134536326662228548882487671665508189766433747463795533452639259465391358181697587065279138184314602959371854621675838435832258336496237617779993735667418234176146936436259168947396682999894955659055817127357567593394797375162816495112742211472421417542734461604328877268347132677528833365101399549177105986645449119996561338576983732761367813185275335861292594267441516546978885868731537195649458896524546124693268162248306493697839383363454521958915751930925213217627713472521830363388882813981333293378479633651931984595923183929922702834966844285456469445105126896854368696946254668381641788305986462240835393229783999080156430716930181457195935656397784952542830289785909252153982533332458022803474184516234763684521705622811145679082151287356723537999356814512532528949528969579149153420261525717336728254855457827980242427304257316437821868161726375297745426711048769060879245681159838438595564231082891597185147474329185291245193104954341266827012466119427710716361762496497271526730643241627790778667959896345064608438662893761130512829847121145443214639412281277646244264293479869736776852446198669374601371636554711726845892357654378590208272665129166086236636718157524337811652279283845620103951484662204444137037838593716574932031815427231056635580608546296233386598571968384441443263648547513657497758603765738354528157578318266460565644125676694848913622905317825980542226791695123783728881592098922243741934607241892380764459272741695817747362868038577165359829287047994916661958583447543716265743491084349882309696279131416771192463894871798276256038329986927658216244841243929145518992274721935892717037751987411022129998674498981942906222829795881667831050857254179929636697862155557081207248336012849368586846364246682468596584227918659329347194812776589361831491585814421023357676102175876363832595274114137536209574544825362219561319284938214024903748803539392679528466299824896550804443446613188281353444468885625310638293952010346964995524861034529197984964478376694431778475374325642770609251467057219274367932833869822783514718836563506163534338548484114576359459802354886311741960628279479841178795893845551568269399577846172279124161435489342668586349317329872674326228863962813645315423417015676112675571905611663349145153531034403010121230413525237243926568443338495356568037999870368212631424971015639252197676896218582221271633639584863883476422801093982915855989315079981481115653656515396597144516992884707788254456898021105752159350207689797625203774248828666824178049238211545072717756141020453086939596358067154454469827485749165218223445948739163333769241679325826049572488739978581560321865462558686412232868766211387579443898987472933063362273276621648570879416542180727314369154377940658965651537136769401910424984434474599717628123277330632597717052328514961280987692184774529111165996376713335716915097503778196741959743976712578096663843919527843748966263645268486572487333199866647414302517185990944275189279599476108948814844479797451994857498825139308999362277975838752373876849765353406321518493719024601398967117126675684438324214707255963551912627812726823467271440104569959638701254673847686892322659269438191292454640589915171054541779864960196872759993272999994361558930322226339250552928878051612070104913719592769739527543664363208299845051598218159315165292706331396133576692331148869665783187473163779475127711144998841473954184711296959670998035235763747529647456188252616397511064495832622610512622429821445016327820975755998693842362134465609270863033129961562396549435338586198563992216846142989932249969101535435684889022218510866318824367526572944795701266531259966291826331565950189825647174682838183774427947415560816811612050352737263973105281812389921422711087164182568670317165646714182440661055381478247181808580511746476874721445762976444141977588173328242131227147488043102351806698672280663128174352336514938599305131889693142336129066813611434424702467247362593013386559353821971589679097811575497399196911143992496274655978715883136585606930437668166225566586741178663830337748666120654313345564131888351942751929813352616568583531656460161360262287989055923449115723314312638598644347357852101229638211295235826199419529564072255776988278266041606510364484421272474269671333233171755916647444617057792777362758456493823114691019916823794563693224567965699772404738498892892557987349753045507189862756513479963084918433846043297773713552184735178444528529507922847850182748671835105892964058384824129948415690909067469252802112289940747020107042618913975694113861841296315448998338729770706075176447644672372642955963407027866531611342959968281356672696924293668235378697525664912724784027164858201094527579287624679181197234361482684077871276728788159435699350564246701177267853685421366479418977384867802955803067623018421043596741295395117381454523186422615430398196242825218139756498107776299919923990277614317514254319647176164774539059469459273156184687134886732289347259323082461959973155364576553041157952443629422394796120594888385496545177775875756325861926214291185063481294874928731422799598285482459849358195636148579116417121745476449279823242866066102823274343994631233029913997472636963847165053653696105325181531381750769133645956354365722982219734651340188174673327944331893427496810491589427270289639402646226711287010197277345173318251507755146643547630528289954530503112342780875519312760138141619322496324657264428630303552269369534148557144298743224786459285322472673681943125554985948163842575129682236661127655346054589393817658386596419268328656257467429815453879409578518592706815886573863879378611702782468230408029978028193858137498781550798897337390615839457199397428111413722777763676128364606334909374439676673672853531726417616987867187914722739850898627299196541262145670152016219190857499211168453797692977572959281597929397822962477717615984396274164939506022776754941341182160748969968767598617169581662397771428616899186915696495338679451035999757834370354924879113741549942795772923668558947377915787314396371394784574968656158657565034693327456669177542915051905575476059783220545938234511664396882360139286175046298217436760766478444144239015741869846029592198486630951993557029614379476451855626704420128482327451306211791445514343485438834838254817528567461895424434927737596953315987301041864246188076624099882225138985974070315096895247371594315518941299735368195663976255876311536117877671696713896571239689407411105863756557126785316795308321935041688243204793646782432842896615328240411178152380836310798421441414998550662721133367707695624710896079356996993398863426731931367136278855144259958374123588219098301313434052176087104260814545475984715232614135281064485520635647985723917549698547635161714156946491604895132583175915936986321747784782159327832216262363512314463047832025813650866580461426239786919410892638354986248312186078607613292361444941481225631938207179352183101491743583202525718936755176273745476514797419679385413652583789695544452574488910931419803094382972331662155934237519663035824462139056969293596223386740271396244648812626208685795151783198808765533716762215903286314824679789706966919730981389129868223264509149918326231354949775592894773060947721231771567520795093435943298935531127156036153229527893158193692547394157985344892778576396165853941433272563854629232415414558109468168580524017852887924867859193824113874799836175795642352189506093747771622286795913321781835214247039494167143024926110785963995243168120124151175117527585514788423023343548337053489558454252283119447817657214985891662945789263812772977599415677761196381630436217542659189774895473905068312810114795404115752971807892372944385039542765599320172062393919675693863178204285738196311664432131437198895895167079642438744971794673623472384321327130295244905287363349231569734748752634443433862991718624123293493795753482352958876888186729827834136910497521113229382378264724465037498817795944301971554926639884344917864352912850815182373519382370193416377770789013827445711290637077463235494549834253518858208063208837324028968650398093293415238250209584476670813270577333236447449476915841657725403640513440989848444096261146604093177865856867612867554348642727386495831786896854473143839375792289368695951677651330795881722354919165985744364645495588387635765512585336994940947050403564912573644162129261158863226697959180185853225285948933473694429341622845108910986057958186228283388596609389382957848980671524959892333379899910785149696732686117329513644252644981691769313951562037421222993327511475946320337518332434356511712259919160684168129731625519709719108515583846226357991832662963654427133359517239771987149692949560235952873845479365716649255485336458641678652557832418958364273773454558921840679291282097401461794629792769898821224694171789318371185634581664575790211914303680806346953355577035136965373530349083216614907713955965674163396666802591993767767387548959681183517692702051751690279948371546689786275717953692839630869253939643739644632081737839636392969140819870364611893354811171277341897772942685307541378978725525275544286263658370642730212142991677979888586318155787998298197290786627724729871127129226649077369522214915591915613284422234968237932718685496539140297692797728656173577027541573318631905889913920278168965292503997496138847265404592246221721197612058875021818240531368656885324733776159855470235250439667495331505251964381962790644713216414954067451724232177991311285437255575853951924022769756568557759888934784289431766810165798775124752348769764812653485034652388885945266761959047895756407468418363815018837670378564595271856184176694895293417846989544812915358344271478803880344167564821918594453538344091329';

const getChecksum = (diskmap) => {
	let total = 0;

	for (let i = 0; i < diskmap.length; i++) {
		const id = diskmap[i];
		if (id !== '.') {
			total += i * diskmap[i];
		}
	}

	return total;
};

const calculateInitialDiskspace = (disk) => {
	let id = 0;
	const diskspace = [];

	for (let i = 0; i < disk.length; i++) {
		const digit = parseInt(disk[i]);
		if (i % 2 === 0) {
			for (let j = 0; j < digit; j++) {
				diskspace.push(id);
			}
			id++
		} else {
			for (let k = 0; k < digit; k++) {
				diskspace.push('.');
			}
		}
	}

	return [diskspace, id - 1];
};

const findAvailableBlock = (diskmap, size, current) => {
	let run = 0;
	let index = -1;
	for (let b = 0; b < current; b++) {
		const d = diskmap[b];
		if (d === '.') {
			run++;
			if (index < 0) {
				index = b;
			}
			if (run >= size) {
				break;
			}
		} else {
			run = 0;
			index = -1;
		}
	}

	if (run >= size) {
		return index;
	}

	return -1;
};

const test1 = (input) => {
	const [diskspace, id] = calculateInitialDiskspace(input.split(''));

	let checkStart = 0;
	let checkEnd = diskspace.length;
	let lastID;
	let firstSpace;
	while(checkStart < checkEnd) {
		while (!lastID || lastID === '.') {
			checkEnd--;
			lastID = diskspace[checkEnd];
		}
		while (firstSpace !== '.') {
			checkStart++;
			firstSpace = diskspace[checkStart];
		}
		if (checkStart < checkEnd) {
			diskspace[checkStart] = lastID;
			diskspace[checkEnd] = '.';
			lastID = '.';
			firstSpace = 0;
		}
	}

	return getChecksum(diskspace);
};

const test2 = (input) => {
	let [diskspace, id] = calculateInitialDiskspace(input.split(''));

	while(id > 0) {
		let idFileCurrent = diskspace.indexOf(id);
		let idFileBlocks = diskspace.filter(f => f === id).length;
		let firstOpenBlock = findAvailableBlock(diskspace, idFileBlocks, idFileCurrent);

		if (firstOpenBlock > 0) {
			for (let i = 0; i < idFileBlocks; i++) {
				diskspace[firstOpenBlock + i] = id;
				diskspace[idFileCurrent + i] = '.';
			}
		}

		id--;
	}

	return getChecksum(diskspace);
};

console.log('Answer - Part 1 - Input 1');
console.log(test1(demoInput));
// 1928
console.log('Answer - Part 1 - Input 2');
console.log(test1(testInput));
// 6398608069280

console.log('Answer - Part 2 - Input 1');
console.log(test2(demoInput));
// 2858
console.log('Answer - Part 2 - Input 2');
console.log(test2(testInput));
// 
