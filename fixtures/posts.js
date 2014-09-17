exports.Post = [
  {
    title: "Probak eratzen Symfony2-n",
    body : "<p>Probak, ingelesez \"Tests\" kodea modu onean edukitzen "        +
          "laguntzen duten erremintak dira. Hasiera batean, ez bada hauen "    +
          "erabilgarritasuna nabaritzen, epe ertainera programatzaile hobea "  +
          "bihurtzen zaituzte.</p> <p>PHP lengoairen munduan erabiltzen den "  +
          "framework-a PHPUnit izena dauka eta gaurko honetan Symfony2 "       +
          "proiektu batean nola konfiguratzen den azalduko dut.</p>"           +
          "<p>Lehenik eta behin, Xdebug luzapena instalatzea beharrezkoa da, " +
          "bestela PHPUnit-ek ez du funtzionatuko. Xdebug gauza askoren "      +
          "artean gure iturburu kodearentzako araztailea moduko bat da.</p>"   +
          "<p>OS X sistema eragilean, Homebrew pakete sistema instalatuta "    +
          "badaukazu, hurrengo komandoarekin modu erraz batean instalatzeko "  +
          "aukera daukazu.</p><p>php 5.4 bertsioarekin:</p>"                   +
          "<p><script src='https://gist.github.com/benatespina/07e3010957c339f2f652.js?file=install-xdebug-for-php-54.sh'></script></p>" +
          "<p>php 5.5 bertsioarekin:</p>"                                      +
          "<p><script src='https://gist.github.com/benatespina/07e3010957c339f2f652.js?file=install-xdebug-for-php-55.sh'></script></p>" +
          "<p>Hori egin ostean, Symfony2-ko edozein proiekturen barruan "      +
          "dagoen app karpetara joan eta phpunit.xml.dist fitxategia erro "    +
          "direktoriora kopiatu beharra dago. Kopiatu berri duzun "            +
          "fitxategiari izena aldatu behar zaio .dist atzizkia kenduz.</p>"    +
          "<p>Ondoren, phpunit.xml ireki eta bertan dagoen kodea "             +
          "hurrengokoarekin trukatu ezazu. Aldaketa gutxi egin dira bertan, "  +
          "guztiak direktorioei buruzkoak dira, erabili beharreko komandoak "  +
          "motzagoak izan daitezen.</p>"                                       +
          "<p><script src='https://gist.github.com/benatespina/07e3010957c339f2f652.js?file=phpunit.xml'></script></p>" +
          "<p>Azken pausuan, composer.json fitxategian PHPUnit-i buruzko "     +
          "menpekotasuna jarri (require-dev erabiltzen da, probak eraketa "    +
          "prozesuan erabiltzen diren tresnak baitira, ez du zentzurik "       +
          "produkzioko kodean egotea).</p>"                                    +
          "<p><script src='https://gist.github.com/benatespina/07e3010957c339f2f652.js?file=composer.json'></script> " +
          "eta composer update komandoa exekutatu behar da, honekin PHPUnit "  +
          "liburutegia proiektuaren menpekotasun bezala jaitsi egingo da.</p>" +
          "<p>Bukatzeko, hurrengo komandoarekin zure aplikazioko proba "       +
          "guztiak exekutatuko dira, eta gainera estaldura portzentaiaren "    +
          "azalpen fitxategi bat eratuko da proiektuaren erro direktorioan "   +
          "sortutako /coverage karpetaren barruan html formatuan.</p>"         +
          "<p><script src='https://gist.github.com/benatespina/07e3010957c339f2f652.js?file=phpunit-coverage.sh'></script></p>",
    tags: [
      { tag: "symfony" },
      { tag: "phpunit" },
      { tag: "php" },
      { tag: "unit-test" }
    ]
  }, {
    title: "Error: couldn't connect to server MongoDB-n",
    body : "<p>Gaur, proiektu berri batekin hastera nihoan, MongoDB "          +
    "beharrezkoa duena. Hau piztera nihoanean horrelako mezu beldurgarria "    +
    "agertu zait neure terminalean:</p>"                                       +
    "<p><script src='https://gist.github.com/benatespina/440c8f17da3be49093cf.js?file=error.sh'></script></p>" +
    "<p>Momentu batez instalatu nueneko aldia etorri zait burura. Itxuraz, "   +
    "oso prozesu sinplea da, Homebrew-ren bitartez egiten bada, batez ere, "   +
    "baina izugarrizko korapilo mentala izan nuen load/unload eta start/stop " +
    "komandoak nahastuz. Baina hori iragana da; gaurko kontua konpontzeko "    +
    "hamaika proba desberdin egin ostean, hauxe egin behar izan dut:</p>"      +
    "<p>Lehenik eta behin, mongod.lock fitxategia ezabatu behar da, kontutan " +
    "hartu beheko komando nire direktoriaren arabera idatzita dagoela, "       +
    "konproba ezazue zuena bertan dagoen ere. Hori egin ostean Mongo-ren "     +
    "kontsola piztu prozesua hasi dadin, eta berehala prozesua hil "           +
    "dezakegu.</p>"                                                            +
    "<p><script src='https://gist.github.com/benatespina/440c8f17da3be49093cf.js?file=command.sh'></script></p>" +
    "<p>Komando hauek burutu ostean, localhost:27017 helbidera abiatzen "      +
    "bagara, MongoDB martxan dagoela nabarituko dugu honako mezua agertuko "   +
    "baitzaigu:</p>"                                                           +
    "<p><script src='https://gist.github.com/benatespina/440c8f17da3be49093cf.js?file=mongo-message'></script></p>" +
    "<p>Beraz, berriz gure komandoekin datu basea kontrolatzea lortuko.</p>"   +
    "<p><script src='https://gist.github.com/benatespina/440c8f17da3be49093cf.js?file=services.sh'></script></p>",
    tags: [
      { tag: "mongodb" },
      { tag: "nosql" },
      { tag: "osx" },
    ]
  }, {
    title: "Composer install VS composer update",
    body : "<p>PHP-k duen tresna <span class='cross-out'>hoberena</span> "     +
    "hoberenetarikoa da <a href='https://getcomposer.org/'>Composer</a>. "     +
    "Ezagutzen ez duenarentzat, lengoia honetan egiten diren proiektuen  "     +
    "menpekotasunak era erraz batean kudeatzeko balio duen erreminta da.</p>"  +
    "<p>Behin gure composer.json fitxategia bete ondoren, menpekotasunak "     +
    "instalatzea, composer install edota composer update komandoak exekutzea " +
    "bezain sinplea da. Hasiera batean bata edo bestea egitea berdin dela "    +
    "antzeman daitekeen arren, bakoitzak bere funtzio zehatza dauka.</p>"      +
    "<p>composer install egiten den lehenengo aldian, composer.lock "          +
    "fitxategia eratzen da proiektuaren erro direktorioan composer.json "      +
    "dagoen direktorioan, hain zuzen. Fitxategi honen eginkizuna instalatuta " +
    "dauden menpekotasunen bertsio zehatza gordetzea da, horrela makina "      +
    "desberdinetan menpekotasunen bertsio berberak instalatu ditzakegu "       +
    "composer install komandoa exekutatuz.</p>"                                +
    "<p>Bestalde, menpekotasunen bertsioak eguneratu nahi baditugu -beraz, "   +
    "composer.lock fitxategia eguneratu- composer update egin beharko da.</p>" +
    "<p>Ondorioz, menpekotasunak kudeatzeko orduan:</p>"                       +
    "<p>Lehenengoz, composer install eguneratutako menpekotasunak "            +
    "instalatzeko eta composer.lock fitxategia eratzeko.</p>"                  +
    "<p>Hortik aurrera bi aukera edukiko dira: </p>"                           +
    "<p><span class='bold'>composer install</span>: composer.lock "            +
    "fitxategiaren barruan dauden bertsioak instalatu nahi badira, ezer ez "   +
    "eguneratu gabe.<br><span class='bold'>composer update</span>: "           +
    "composer.lock fitxategia berridazten du, menpekotasunen bertsio "         +
    "berriekin.</p><p>Azalpen honekin, composer.lock fitxategia bertsioen "    +
    "kontrol sistemetan sartu behar den ala ez galderaren erantzuna nahiko "   +
    "garbi geratzen da: bai, Git edota SVN <span class='cross-out'>(espero "   +
    "dut Git erabilzea)</span> motatako sistemetan sartu beharra dago, beste " +
    "makinetan edota egindako azken commit-aren barruan eduki daitezkeen "     +
    "menpekotasunen bertsio berberak instalatzeko aukera ematen baituelako.",
    tags: [
      { tag: "composer" },
      { tag: "php" }
    ]
  }, {
    title: "Arazoak LiveReload erabiltzerakoan",
    body : "<p>Nire azkenengo proiektua <a href='http://nodejs.org'>NodeJS</a>"+
    " ingurunean izan da eta bertako ekintza asko automatizatzeko "            +
    "<a href='http://gruntjs.com'>GruntJS</a> erabili nuen, bertan bada "      +
    "nabegatzailea automatikoki berkargatzen duen ekintza bat (F5az ahasteko " +
    "oso erosoa dena): <strong>LiveReload</strong>. Oso tresna eraginkorra "   +
    "eta baliotsua izan arren zenbait kasutan, bere onetik atera eta gauza "   +
    "arraroak egiten hasten zen.</p>"                                          +
    "<p>Oso ohikoa zen portuak geldituta eduki arren erabiltzen ari zirela "  +
    "esatea ondorengo mezuarekin:</p>"                                         +
    "<p><script src='https://gist.github.com/benatespina/bdb4c145fb00bbabf8b9.js?file=liveReload-in-use'></script></p>" +
    "<p>Hau ordenadorea itzali gabe konpontzeko, hurrengo komando honekin "    +
    "konpondu daiteke:</p>"                                                    +
    "<p><script src='https://gist.github.com/benatespina/bdb4c145fb00bbabf8b9.js?file=kill-process.sh'></script>" +
    "non 35729 zenbakia LiveReload-ek erabiltzen duen portua den; zure "       +
    "kasuan aldatu zure portuaren zenbakiagatik.</p>",
    tags: [
      { tag: "live-reload" },
      { tag: "nodejs" },
      { tag: "gruntjs" }
    ]
  },
  {
    title: "Linux sistema eguneratu eta garbitzeko script bat",
    body: "<p>Script bat erabil dezakegu gure Debian/Ubuntu sistema eguneratu " +
    "eta garbitzeko terminalaren zain egon gabe, agindu baten bitartez soilik." +
    "</p><p>Instalatzeko gehitu ondoko kodea zure .bashrc fitxategiari (.zshrc" +
    "fitxategia zsh erabiltzen baduzu):</p>" +
    "<p><script src='https://gist.github.com/ikerib/391a0be5a1f99247b133.js'></script></p>"+
    "<p>Script-ak ondoko gauzak ditu beharrezko:</p><p><span class='bold'> " +
    "localepurge </span>: sobran diren hizkuntzen fitxategiak ezabatzeko.</p>" +
    "<p><span class='bold'> deborphan </span>: sisteman sobera diren fitxategiak " +
    "aurkitu eta ezabatuko ditu </p><p>Ikusten den bezala, azken lerroan " +
    "<span class='italic'>apt-get moo</span> egiten da, dena ondo joan bada, " +
    "behi bat erakutsiz ;)</p><p>Script-ari deitzeko egin <span class='italic'>eguneratu</span> " +
    "idatzi zure terminalean",
    tags: [{ tag: "linux"}]
  },
];