import { Component } from '@angular/core';
import { Test } from 'src/app/models/test.model';
import { TestUvWebService } from 'src/app/services/test-uv-web.service';

@Component({
  selector: 'app-add-test-uv-web',
  templateUrl: './add-test-uv-web.component.html',
  styleUrls: ['./add-test-uv-web.component.css']
})
export class AddTestUvWebComponent {
  test: Test = new Test();
  submitted = false;

  itemApPaternoError = '';
  itemApMaternoError = '';
  itemNombreError = '';
  itemMatriculaError = '';
  itemCarreraError = '';
  itemPeriodoError = '';
  itemFacultadError = '';


  item1Error = '';
  item2Error = '';
  item3Error = '';
  item4Error = '';
  item5Error = '';
  item6Error = '';
  item7Error = '';
  item8Error = '';
  item9Error = '';
  item10Error = '';
  item11Error = '';
  item12Error = '';
  item13Error = '';
  item14Error = '';
  item15Error = '';
  item16Error = '';
  item17Error = '';
  item18Error = '';
  item19Error = '';
  item20Error = '';
  item21Error = '';
  item22Error = '';
  item23Error = '';
  item24Error = '';

  missingValuesError = '';

  arrMD: Array<number> = [1,
    5,
    10,
    20,
    30,
    40,
    50,
    60,
    65,
    75,
    84,
    87,
    90,
    93,
    95,
    97,
    97,
    98,
    98,
    98,
    99];

  arrMI: Array<number> = [
    4,
    10,
    25,
    40,
    55,
    70,
    82,
    90,
    95,
    96,
    97,
    97,
    97,
    97,
    97,
    97,
    97,
    99];

  arrMS: Array<number> = [
    5,
    10,
    16,
    30,
    40,
    55,
    63,
    75,
    84,
    90,
    95,
    96,
    97,
    97,
    97,
    97,
    98,
    98,
    98,
    99]

  arrMC: Array<number> = [
    1,
    5,
    16,
    30,
    55,
    70,
    84,
    93,
    95,
    97,
    97,
    97,
    98,
    98,
    98,
    99
  ]


  arrLD: Array<number> = [
    99,
    95,
    87,
    80,
    65,
    55,
    50,
    35,
    30,
    20,
    18,
    15,
    10,
    6,
    5,
    4,
    3,
    2,
    2,
    2,
    2,
    1
  ];

  arrLI: Array<number> = [
    99,
    95,
    87,
    75,
    55,
    40,
    25,
    16,
    10,
    5,
    4,
    4,
    3,
    3,
    3,
    2,
    2,
    2,
    2,
    1
  ];

  arrLS: Array<number> = [
    99,
    97,
    95,
    87,
    80,
    65,
    55,
    35,
    28,
    18,
    10,
    5,
    4,
    3,
    3,
    3,
    2,
    2,
    2,
    1
  ]

  arrLC: Array<number> = [
    99,
    97,
    95,
    90,
    84,
    70,
    55,
    40,
    38,
    23,
    10,
    5,
    4,
    3,
    2,
    2,
    1
  ]

  arrtempTC: number[][] = [
    [-21, 1],
    [-20, 2],
    [-19, 2],
    [-18, 2],
    [-17, 2],
    [-16, 2],
    [-15, 2],
    [-14, 2],
    [-13, 4],
    [-12, 5],
    [-11, 5],
    [-10, 9],
    [-9, 13],
    [-8, 15],
    [-7, 16],
    [-6, 20],
    [-5, 25],
    [-4, 29],
    [-3, 35],
    [-2, 40],
    [-1, 45],
    [0, 50],
    [1, 55],
    [2, 60],
    [3, 65],
    [4, 67],
    [5, 70],
    [6, 75],
    [7, 80],
    [8, 84],
    [9, 85],
    [10, 90],
    [11, 91],
    [12, 94],
    [13, 95],
    [14, 96],
    [15, 97],
    [16, 97],
    [17, 98],
    [18, 98],
    [19, 98],
    [20, 99]
  ]

  arrTD = {
    '-21': 1,
    '-20': 2,
    '-19': 2,
    '-18': 2,
    '-17': 2,
    '-16': 2,
    '-15': 2,
    '-14': 2,
    '-13': 4,
    '-12': 5,
    '-11': 5,
    '-10': 9,
    '-9': 13,
    '-8': 15,
    '-7': 16,
    '-6': 20,
    '-5': 25,
    '-4': 29,
    '-3': 35,
    '-2': 40,
    '-1': 45,
    '0': 50,
    '1': 55,
    '2': 60,
    '3': 65,
    '4': 67,
    '5': 70,
    '6': 75,
    '7': 80,
    '8': 84,
    '9': 85,
    '10': 90,
    '11': 91,
    '12': 94,
    '13': 95,
    '14': 96,
    '15': 97,
    '16': 97,
    '17': 98,
    '18': 98,
    '19': 98,
    '20': 99
  };


  arrTI = {
    '-19': 1,
    '-18': 2,
    '-17': 2,
    '-16': 2,
    '-15': 2,
    '-14': 2,
    '-13': 2,
    '-12': 2,
    '-11': 2,
    '-10': 3,
    '-9': 4,
    '-8': 5,
    '-7': 6,
    '-6': 10,
    '-5': 16,
    '-4': 20,
    '-3': 29,
    '-2': 35,
    '-1': 45,
    '0': 55,
    '1': 60,
    '2': 70,
    '3': 75,
    '4': 85,
    '5': 90,
    '6': 95,
    '7': 96,
    '8': 97,
    '9': 97,
    '10': 98,
    '11': 98,
    '12': 98,
    '13': 98,
    '14': 98,
    '15': 98,
    '16': 98,
    '17': 99

  };

  arrTS = {
    '-19': 1,
    '-18': 2,
    '-17': 2,
    '-16': 2,
    '-15': 2,
    '-14': 2,
    '-13': 2,
    '-12': 3,
    '-11': 4,
    '-10': 5,
    '-9': 8,
    '-8': 10,
    '-7': 15,
    '-6': 20,
    '-5': 25,
    '-4': 30,
    '-3': 35,
    '-2': 40,
    '-1': 50,
    '0': 57,
    '1': 60,
    '2': 70,
    '3': 75,
    '4': 80,
    '5': 84,
    '6': 87,
    '7': 91,
    '8': 94,
    '9': 96,
    '10': 97,
    '11': 97,
    '12': 98,
    '13': 98,
    '14': 98,
    '15': 98,
    '16': 98,
    '17': 98,
    '18': 98,
    '19': 99
  };

  arrTC = {
    '-16': 1,
    '-15': 2,
    '-14': 2,
    '-13': 2,
    '-12': 2,
    '-11': 3,
    '-10': 4,
    '-9': 6,
    '-8': 9,
    '-7': 13,
    '-6': 20,
    '-5': 25,
    '-4': 30,
    '-3': 35,
    '-2': 55,
    '-1': 60,
    '0': 70,
    '1': 75,
    '2': 84,
    '3': 90,
    '4': 95,
    '5': 96,
    '6': 97,
    '7': 97,
    '8': 98,
    '9': 98,
    '10': 98,
    '11': 98,
    '12': 98,
    '13': 98,
    '14': 98,
    '15': 99
  };


  arrInter = {
    '1': 'Persuasivo	el que tiene fuerza para hacer creer a otros una cosa, convencer de algo.',
    '2': 'Gentil	el que actúa con cortesía y soltura, con urbanidad. El amable, gallardo, con gracia.',
    '3': 'Humilde	sencillo, que no alardea (no interpretar como vida cristiana)',
    '4': 'Original	el que no es imitación de otro, el singular.',
    '5': 'Agresivo	el que demuestra empuje e iniciativa en una forma positiva, no es el propenso a ofender.',
    '6': 'Alma de la fiesta	el más popular, el que genera mayor atracción en  el grupo.',
    '7': 'Comodino	el amante de la comodidad, que busca caminos fáciles.',
    '8': 'Temeroso	el tímido, el cobarde, aprensivo.',
    '9': 'Agradable	el que agrada y complace, gusta a los demás.',
    '10': 'Temeroso de Dios	el que reconoce el poder de Dios sobre todas las cosas, religioso',
    '11': 'Tenaz	el obstinado y testarudo, con inquebrantable fuerza de voluntad para realizar algún objetivo.',
    '12': 'Atractivo	cualidad de la persona (encanto) que atrae la voluntad de los demás.',
    '13': 'Cauteloso	el reservado que actúa con cuidado, con precaución.',
    '14': 'Determinado	el atrevido, que toma resoluciones, preciso y decidido, que define.',
    '15': 'Convincente	el que sabe convencer y obligar a otro con razones a que reconozca una cosa o cambie de opinión.',
    '25': 'Fuerza de voluntad	determinación inquebrantable para lograr algo, firmeza.',
    '26': 'Mente abierta	cualidad para escuchar y recibir otro punto de vista diferente.',
    '27': 'Complaciente	el que procura ser agradable, servicial, solícito, comedido, conciliador o deferente.',
    '28': 'Animoso	el que demuestra valor, energía voluntad, intención y esfuerzo para la lucha o el trabajo.',
    '29': 'Confiado	el presumido y vanidoso, crédulo y sencillo. No el que confía en sí mismo.',
    '30': 'Simpatizador	el que manifiesta inclinación o afecto natural hacia otras personas.',
    '31': 'Tolerante	el que reconoce y respeta las opiniones, prácticas y comportamiento de otros, aunque sean diferentes a las de él. No el que sufre con paciencia o el que deja pasar cosas que no son lícitas.',
    '32': 'Afirmativo	el que responde en la mayoría de las ocasiones de una manera positiva. No el que se sostiene o ratifica lo dicho.',
    '33': 'Ecuánime	el calmado, sereno, imparcial, inalterable, paciente, prudente. Que tiene siempre el mismo ánimo.',
    '34': 'Preciso	el puntual y exacto, con claridad y determinado.',
    '35': 'Nervioso	el ansioso, al que le falta sentido de seguridad',
    '36': 'Jovial	el apacible, alegre y festivo.',
    '37': 'Disciplinado	el acostumbrado a la obediencia, a seguir las reglas.',
    '38': 'Generoso	el que obra con magnanimidad y nobleza, liberal dadivoso y franco.',
    '39': 'Animoso	el que demuestra valor, energía voluntad, intención y esfuerzo para la lucha o el trabajo.',
    '40': 'Persistente	el que supera obstáculos, el que es constante, y perseverante, el que se mantiene en un propósito.',
    '41': 'Competitivo	el que contiende o disputa con otros por una causa de superación común por perfección o por la posesión de propiedades.',
    '42': 'Alegre	el  que está lleno de alegría y la ocasiona en otros. Contento de animo, festivo.',
    '43': 'Considerado	el que obra con reflexión y que trata con respeto a los demás.',
    '44': 'Armonioso	el que tiene amistad y buena correspondencia, el que no tiene fricciones con otros.',
    '45': 'Admirable	que es digno de admiración. Notable.',
    '46': 'Bondadoso	el que es muy bueno, humanitario.',
    '47': 'Resignado	el que se conforma, se sujeta, el condescendiente. El que acepta estar bajo la voluntad de otro.',
    '48': 'Carácter firme	que no cambia fácilmente su punto de vista o su estilo de condición.',
    '49': 'Obediente	el que sabe seguir indicaciones sin poner su creatividad, cumple voluntad de quien manda, dócil, subordinado.',
    '50': 'Quisquilloso	el que fácilmente se agravia u ofende, demasiado delicado en el trato, meticuloso.',
    '51': 'Inconquistable	que no se deja vencer con ruegos, detalles o agasajos, susceptible.',
    '52': 'Juguetón	el que tiene buen sentido del humor, aficionado a bromas.',
    '53': 'Respetuoso	el que guarda reverencia, consideración y cortesía para los demás.',
    '54': 'Emprendedor	que muestra imaginación instintiva y empuje, que se dedica a resolver situaciones difíciles. Atrevido.',
    '55': 'Optimista	el que suele ver y juzgar las cosas bajo su aspecto más favorable.',
    '56': 'Servicial	el que sirve con diligencia, siempre dispuesto a complacer a otros, amable y colaborador.',
    '57': 'Valiente	el que manifiesta coraje y decisión. El fuerte, enérgico y animoso.',
    '58': 'Inspirador	el que anima la mente o las emociones de otros; infunde entusiasmo.',
    '59': 'Sumiso	el que permite por sí mismo estar sujeto a otro. Obediente y dócil.',
    '60': 'Tímido	callado, no busca sobresalir.',
    '61': 'Adaptable	el que se ajusta fácilmente a condiciones nuevas o diferentes.',
    '62': 'Disputador	dado a argüir o debatir razones para, por o contra algo. Discutidor.',
    '63': 'Indiferente	el que parece en forma sistemática no estar involucrado. No presenta motivo de preferencia.',
    '64': '"Sangre liviana"	el que a todo el mundo le cae bien, persona simpática.',
    '65': 'Amiguero	el que busca y goza la compañía de otros, muy sociable.',
    '66': 'Paciente	el que es capaz de soportar, sabe esperar con calma el momento oportuno.',
    '67': 'Confianza en sí mismo	confía en sus propias capacidades y recursos, autosuficiente.',
    '68': 'Mesurado para hablar	medido para hablar, habla lo necesario.',
    '69': 'Conforme	el satisfecho con lo que tiene, de acuerdo con el parecer de otros.',
    '70': 'Confiable	persona con la cual se tiene confianza.',
    '71': 'Pacífico	el que tiene calma y serenidad, amante de la paz.',
    '72': 'Positivo	optimista.',
    '73': 'Aventurero	el que busca aventuras',
    '74': 'Receptivo	persona con capacidad de recibir, facilidad para captar algo',
    '75': 'Cordial	persona amable, afectuosa, cariñosa.',
    '76': 'Moderado	guarda medio entre dos extremos, que mantiene un equilibrio en sus acciones.',
    '77': 'Indulgente	el que perdona fácilmente, tolerante, conciliador.',
    '78': 'Esteta	el que es aficionado, percibe o cultiva la belleza. Busca en todo la elegancia.',
    '79': 'Vigoroso	el robusto y fuerte.',
    '80': 'Sociable	el que busca y necesita del compañerismo de otros, fácil de tratar con él.',
    '81': 'Parlanchín	persona locuaz, que tiene inclinación por hablar mucho, platicador.',
    '82': 'Controlado	ejerce influencia resultante en sí mismo y en otros, con dominio de sí.',
    '83': 'Convencional	el que se mantiene en una trayectoria de uso general.',
    '84': 'Decisivo	el resuelto, determinado e incuestionable.',
    '85': 'Cohibido	el que se limita, restringe o controla ante los demás.',
    '86': 'Exacto	justo, preciso, matemático, calculador.',
    '87': 'Franco	espontáneo, leal, sincero.',
    '88': 'Buen compañero	persona sociable, que mantiene armonía con otros.',
    '89': 'Diplomático	el que se caracteriza por el buen tacto en su trato con la gente.',
    '90': 'Audaz	el arrogante e insolente. No el osado ni atrevido.',
    '91': 'Refinado	el elegante y fino en su manera de ser, se distingue.',
    '92': 'Satisfecho	se contenta o conforma con lo que tiene.',
    '93': 'Inquieto	el que gusta de lo nuevo, versátil y cambiante.',
    '94': 'Popular	el que genera atracción en el grupo.',
    '95': 'Buen vecino	el que actúa con soltura y cortesía.',
    '96': 'Devoto	el sumiso y fiel.'
  };

  MD: any;
  MI: any;
  MS: any;
  MC: any;

  LD: any;
  LI: any;
  LS: any;
  LC: any;

  TotD: any;
  TotI: any;
  TotS: any;
  TotC: any;

  ResultMD: any;
  ResultMI: any;
  ResultMS: any;
  ResultMC: any;

  ResultLD: any;
  ResultLI: any;
  ResultLS: any;
  ResultLC: any;

  ResultTotD: any;
  ResultTotI: any;
  ResultTotS: any;
  ResultTotC: any;

  FinalT: any;
  FinalM: any;
  FinalL: any;

  FinalResult: any;
  Result: any;

  message = '';
  greenClass: string | string[] | Set<string> | { [klass: string]: any; } | null | undefined;

  currentQuestionIndex = 0;

  anteriorPregunta() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  siguientePregunta() {
    if (this.currentQuestionIndex < 23) {
      this.currentQuestionIndex++;
    }
  }

  validateText(myText: string) {
    var textFill = 0;
    console.log(myText);

    if ((myText != "-") && (myText != ""))
      textFill = 1;
    return textFill;
  }
  constructor(private testUvWebService: TestUvWebService) {
    this.test.appPaterno = "";
    this.test.appMaterno = "";
    this.test.nombre = "";
    this.test.facebook = "";
    this.test.programaInteres = "";
    this.test.periodo = "2025";
    this.test.facultad = "fnt";

  }

  validateGroups(): number {
    var sumGroups = 0;

    var itemApPaterno = this.validateText(this.test.appPaterno as string);
    if (itemApPaterno == 0) this.itemApPaternoError = "Ap Paterno requerido."
    else this.itemApPaternoError = ""

    var itemApMaterno = this.validateText(this.test.appMaterno as string);
    if (itemApMaterno == 0) this.itemApMaternoError = "Ap Materno requerido."
    else this.itemApMaternoError = ""

    var itemNombre = this.validateText(this.test.nombre as string);
    if (itemNombre == 0) this.itemNombreError = "Nombre requerido."
    else this.itemNombreError = ""

    var itemMatricula = this.validateText(this.test.facebook as string);
    if (itemMatricula == 0) this.itemMatriculaError = "Matricula requerida."
    else this.itemMatriculaError = ""

    var itemCarrera = this.validateText(this.test.programaInteres as string);
    if (itemCarrera == 0) this.itemCarreraError = "Carrera requerida."
    else this.itemCarreraError = ""

    var itemPeriodo = this.validateText(this.test.periodo as string);
    if (itemPeriodo == 0) this.itemCarreraError = "Carrera requerida."
    else this.itemCarreraError = ""

    var itemFacultad = this.validateText(this.test.facultad as string);
    if (itemFacultad == 0) this.itemCarreraError = "Carrera requerida."
    else this.itemCarreraError = ""


    var item1 = this.validateItem(this.test.persuasivoM as number,
      this.test.persuasivoL as number,
      this.test.gentilM as number,
      this.test.gentilL as number,
      this.test.humildeM as number,
      this.test.humildeL as number,
      this.test.originalM as number,
      this.test.originalL as number,
    );
    if (item1 < 2)
      this.item1Error = "Grupo 1 requerido ...";

    var item2 = this.validateItem(this.test.fuerzavoluntadM as number,
      this.test.fuerzavoluntadL as number,
      this.test.menteabiertaM as number,
      this.test.menteabiertaL as number,
      this.test.complacienteM as number,
      this.test.complacienteL as number,
      this.test.animosoM as number,
      this.test.animosoL as number,
    );
    if (item2 < 2)
      this.item2Error = "Grupo 2 requerido ...";

    var item3 = this.validateItem(
      this.test.obedienteM as number,
      this.test.obedienteL as number,
      this.test.quisquillosoM as number,
      this.test.quisquillosoL as number,
      this.test.inconquistableM as number,
      this.test.inconquistableL as number,
      this.test.juguetonM as number,
      this.test.juguetonL as number,
    );
    if (item3 < 2)
      this.item3Error = "Grupo 3 requerido ...";

    var item4 = this.validateItem(
      this.test.aventureroM as number,
      this.test.aventureroL as number,
      this.test.receptivoM as number,
      this.test.receptivoL as number,
      this.test.cordialM as number,
      this.test.cordialL as number,
      this.test.moderadoM as number,
      this.test.moderadoL as number,
    );
    if (item4 < 2)
      this.item4Error = "Grupo 4 requerido ...";


    var item5 = this.validateItem(
      this.test.agresivoM as number,
      this.test.agresivoL as number,
      this.test.almafiestaM as number,
      this.test.almafiestaL as number,
      this.test.comodinoM as number,
      this.test.comodinoL as number,
      this.test.temerosoM as number,
      this.test.temerosoL as number,
    );
    if (item5 < 2)
      this.item5Error = "Grupo 5 requerido ...";

    var item6 = this.validateItem(
      this.test.confiadoM as number,
      this.test.confiadoL as number,
      this.test.simpatizadorM as number,
      this.test.simpatizadorL as number,
      this.test.toleranteM as number,
      this.test.toleranteL as number,
      this.test.afirmativoM as number,
      this.test.afirmativoL as number,
    );
    if (item6 < 2)
      this.item6Error = "Grupo 6 requerido ...";

    var item7 = this.validateItem(
      this.test.respetuosoM as number,
      this.test.respetuosoL as number,
      this.test.emprendedorM as number,
      this.test.emprendedorL as number,
      this.test.optimistaM as number,
      this.test.optimistaL as number,
      this.test.servicialM as number,
      this.test.servicialL as number,
    );
    if (item7 < 2)
      this.item7Error = "Grupo 7 requerido ...";

    var item8 = this.validateItem(
      this.test.indulgenteM as number,
      this.test.indulgenteL as number,
      this.test.estetaM as number,
      this.test.estetaL as number,
      this.test.vigorosoM as number,
      this.test.vigorosoL as number,
      this.test.sociableM as number,
      this.test.sociableL as number,
    );
    if (item8 < 2)
      this.item8Error = "Grupo 8 requerido ...";


    var item9 = this.validateItem(
      this.test.agradableM as number,
      this.test.agradableL as number,
      this.test.temerosodiosM as number,
      this.test.temerosodiosL as number,
      this.test.tenazM as number,
      this.test.tenazL as number,
      this.test.atractivoM as number,
      this.test.atractivoL as number,
    );
    if (item9 < 2)
      this.item9Error = "Grupo 9 requerido ...";


    var item10 = this.validateItem(
      this.test.ecuanimeM as number,
      this.test.ecuanimeL as number,
      this.test.precisoM as number,
      this.test.precisoL as number,
      this.test.nerviosoM as number,
      this.test.nerviosoL as number,
      this.test.jovialM as number,
      this.test.jovialL as number,
    );
    if (item10 < 2)
      this.item10Error = "Grupo 10 requerido ...";

    var item11 = this.validateItem(
      this.test.valienteM as number,
      this.test.valienteL as number,
      this.test.inspiradorM as number,
      this.test.inspiradorL as number,
      this.test.sumisoM as number,
      this.test.sumisoL as number,
      this.test.timidoM as number,
      this.test.timidoL as number,
    );
    if (item11 < 2)
      this.item11Error = "Grupo 11 requerido ...";

    var item12 = this.validateItem(
      this.test.parlanchinM as number,
      this.test.parlanchinL as number,
      this.test.controladoM as number,
      this.test.controladoL as number,
      this.test.convencionalM as number,
      this.test.convencionalL as number,
      this.test.decisivoM as number,
      this.test.decisivoL as number,
    );
    if (item12 < 2)
      this.item12Error = "Grupo 12 requerido ...";

    var item13 = this.validateItem(
      this.test.cautelosoM as number,
      this.test.cautelosoL as number,
      this.test.determinadoM as number,
      this.test.determinadoL as number,
      this.test.convincenteM as number,
      this.test.convincenteL as number,
      this.test.bonachonM as number,
      this.test.bonachonL as number,
    );
    if (item13 < 2)
      this.item13Error = "Grupo 13 requerido ...";

    var item14 = this.validateItem(
      this.test.disciplinadoM as number,
      this.test.disciplinadoL as number,
      this.test.generosoM as number,
      this.test.generosoL as number,
      this.test.ani_mosoM as number,
      this.test.ani_mosoL as number,
      this.test.persistenteM as number,
      this.test.persistenteL as number,
    );
    if (item14 < 2)
      this.item14Error = "Grupo 14 requerido ...";

    var item15 = this.validateItem(
      this.test.adaptableM as number,
      this.test.adaptableL as number,
      this.test.disputadorM as number,
      this.test.disputadorL as number,
      this.test.indiferenteM as number,
      this.test.indiferenteL as number,
      this.test.sangrelivianaM as number,
      this.test.sangrelivianaL as number,
    );
    if (item15 < 2)
      this.item15Error = "Grupo 15 requerido ...";

    var item16 = this.validateItem(
      this.test.cohibidoM as number,
      this.test.cohibidoL as number,
      this.test.exactoM as number,
      this.test.exactoL as number,
      this.test.francoM as number,
      this.test.francoL as number,
      this.test.buencompaneroM as number,
      this.test.buencompaneroL as number,
    );
    if (item16 < 2)
      this.item16Error = "Grupo 16 requerido ...";

    var item17 = this.validateItem(
      this.test.docilM as number,
      this.test.docilL as number,
      this.test.atrevidoM as number,
      this.test.atrevidoL as number,
      this.test.lealM as number,
      this.test.lealL as number,
      this.test.encantadorM as number,
      this.test.encantadorL as number,
    );
    if (item17 < 2)
      this.item17Error = "Grupo 17 requerido ...";

    var item18 = this.validateItem(
      this.test.competitivoM as number,
      this.test.competitivoL as number,
      this.test.alegreM as number,
      this.test.alegreL as number,
      this.test.consideradoM as number,
      this.test.consideradoL as number,
      this.test.armoniosoM as number,
      this.test.armoniosoL as number,
    );
    if (item18 < 2)
      this.item18Error = "Grupo 18 requerido ...";

    var item19 = this.validateItem(
      this.test.amigueroM as number,
      this.test.amigueroL as number,
      this.test.pacienteM as number,
      this.test.pacienteL as number,
      this.test.confianzamismoM as number,
      this.test.confianzamismoL as number,
      this.test.mesuradohablarM as number,
      this.test.mesuradohablarL as number,
    );
    if (item19 < 2)
      this.item19Error = "Grupo 19 requerido ...";

    var item20 = this.validateItem(
      this.test.diplomaticoM as number,
      this.test.diplomaticoL as number,
      this.test.audazM as number,
      this.test.audazL as number,
      this.test.refinadoM as number,
      this.test.refinadoL as number,
      this.test.satisfechoM as number,
      this.test.satisfechoL as number,
    );
    if (item20 < 2)
      this.item20Error = "Grupo 20 requerido ...";

    var item21 = this.validateItem(
      this.test.dispuestoM as number,
      this.test.dispuestoL as number,
      this.test.deseosoM as number,
      this.test.deseosoL as number,
      this.test.consecuenteM as number,
      this.test.consecuenteL as number,
      this.test.entusiastaM as number,
      this.test.entusiastaL as number,
    );
    if (item21 < 2)
      this.item21Error = "Grupo 21 requerido ...";

    var item22 = this.validateItem(
      this.test.admirableM as number,
      this.test.admirableL as number,
      this.test.bondadosoM as number,
      this.test.bondadosoL as number,
      this.test.resignadoM as number,
      this.test.resignadoL as number,
      this.test.caracterfirmeM as number,
      this.test.caracterfirmeL as number,
    );
    if (item22 < 2)
      this.item22Error = "Grupo 22 requerido ...";

    var item23 = this.validateItem(
      this.test.conformeM as number,
      this.test.conformeL as number,
      this.test.confiableM as number,
      this.test.confiableL as number,
      this.test.pacificoM as number,
      this.test.pacificoL as number,
      this.test.positivoM as number,
      this.test.positivoL as number,
    );
    if (item23 < 2)
      this.item23Error = "Grupo 23 requerido ...";

    var item24 = this.validateItem(
      this.test.inquietoM as number,
      this.test.inquietoL as number,
      this.test.popularM as number,
      this.test.popularL as number,
      this.test.buenvecinoM as number,
      this.test.buenvecinoL as number,
      this.test.devotoM as number,
      this.test.devotoL as number,
    );
    if (item24 < 2)
      this.item24Error = "Grupo 24 requerido ...";



    sumGroups = itemApPaterno + itemApMaterno + itemNombre + itemMatricula + itemCarrera +
      item1 + item2 + item3 + item4 +
      item5 + item6 + item7 + item8 +
      item9 + item10 + item11 + item12 +
      item13 + item14 + item15 + item16 +
      item17 + item18 + item19 + item20 +
      item21 + item22 + item23 + item24;
    console.log("total " + sumGroups);
    return sumGroups;
  }

  saveTest(): void {

    var sumGroups = this.validateGroups();
    //console.log(sumGroups);

    if (sumGroups < 53) {
      this.missingValuesError = "LLenar campos requeridos"
    }
    else {
      this.calculateTest();
      this.missingValuesError = "guardando ..."


      this.testUvWebService.create(this.test).then(() => {
        console.log('Created new item successfully!');
        this.submitted = true;
      });
    }
  }

  calculateTest() {


    console.log(this.test);

    this.message = '';

    // 7
    this.MD = Number(this.test.agresivoM) +
      Number(this.test.tenazM) +
      Number(this.test.determinadoM) +
      Number(this.test.atrevidoM) +
      Number(this.test.afirmativoM) +
      Number(this.test.persistenteM) +
      Number(this.test.competitivoM) +
      Number(this.test.caracterfirmeM) +
      Number(this.test.inconquistableM) +
      Number(this.test.emprendedorM) +
      Number(this.test.valienteM) +
      Number(this.test.disputadorM) +
      Number(this.test.confianzamismoM) +
      Number(this.test.positivoM)
    Number(this.test.aventureroM) +
      Number(this.test.vigorosoM) +
      Number(this.test.decisivoM) +
      Number(this.test.francoM) +
      Number(this.test.audazM) +
      Number(this.test.inquietoM);
    // 1          
    this.MI = Number(this.test.persuasivoM) +
      Number(this.test.almafiestaM) +
      Number(this.test.atractivoM) +
      Number(this.test.convincenteM) +
      Number(this.test.encantadorM) +
      Number(this.test.animosoM) +
      Number(this.test.confiadoM) +
      Number(this.test.admirableM) +
      Number(this.test.juguetonM) +
      Number(this.test.optimistaM) +
      Number(this.test.inspiradorM) +
      Number(this.test.sangrelivianaM) +
      Number(this.test.amigueroM) +
      Number(this.test.cordialM) +
      Number(this.test.sociableM) +
      Number(this.test.parlanchinM) +
      Number(this.test.buencompaneroM) +
      Number(this.test.popularM);
    //10         
    this.MS = Number(this.test.gentilM) +
      Number(this.test.comodinoM) +
      Number(this.test.bonachonM) +
      Number(this.test.lealM) +
      Number(this.test.dispuestoM) +
      Number(this.test.complacienteM) +
      Number(this.test.ecuanimeM) +
      Number(this.test.generosoM) +
      Number(this.test.consideradoM) +
      Number(this.test.bondadosoM) +
      Number(this.test.obedienteM) +
      Number(this.test.servicialM) +
      Number(this.test.pacienteM) +
      Number(this.test.confiableM) +
      Number(this.test.moderadoM) +
      Number(this.test.indulgenteM) +
      Number(this.test.controladoM) +
      Number(this.test.satisfechoM) +
      Number(this.test.buenvecinoM);
    // 2
    this.MC = Number(this.test.humildeM) +
      Number(this.test.temerosodiosM) +
      Number(this.test.cautelosoM) +
      Number(this.test.consecuenteM) +
      Number(this.test.menteabiertaM) +
      Number(this.test.precisoM) +
      Number(this.test.disciplinadoM) +
      Number(this.test.respetuosoM) +
      Number(this.test.adaptableM) +
      Number(this.test.mesuradohablarM) +
      Number(this.test.pacificoM) +
      Number(this.test.receptivoM) +
      Number(this.test.exactoM) +
      Number(this.test.diplomaticoM) +
      Number(this.test.devotoM);

    // 4
    this.LD = Number(this.test.originalL) +
      Number(this.test.tenazL) +
      Number(this.test.atractivoL) +
      Number(this.test.entusiastaL) +
      Number(this.test.fuerzavoluntadL) +
      Number(this.test.afirmativoL) +
      Number(this.test.nerviosoL) +
      Number(this.test.persistenteL) +
      Number(this.test.competitivoL) +
      Number(this.test.emprendedorM) +
      Number(this.test.caracterfirmeL) +
      Number(this.test.inconquistableL) +
      Number(this.test.emprendedorL) +
      Number(this.test.disputadorL)
    Number(this.test.confianzamismoL) +
      Number(this.test.positivoL) +
      Number(this.test.aventureroL) +
      Number(this.test.vigorosoL) +
      Number(this.test.decisivoL) +
      Number(this.test.francoL) +
      Number(this.test.audazL) +
      Number(this.test.inquietoL);

    // 7
    this.LI = Number(this.test.almafiestaL) +
      Number(this.test.atractivoL) +
      Number(this.test.convincenteL) +
      Number(this.test.encantadorL) +
      Number(this.test.animosoL) +
      Number(this.test.jovialL) +
      Number(this.test.ani_mosoL) +
      Number(this.test.alegreL) +
      Number(this.test.juguetonL) +
      Number(this.test.optimistaL) +
      Number(this.test.sangrelivianaL) +
      Number(this.test.amigueroL) +
      Number(this.test.confiableL) +
      Number(this.test.cordialL) +
      Number(this.test.sociableL) +
      Number(this.test.parlanchinL) +
      Number(this.test.buencompaneroL) +
      Number(this.test.refinadoL) +
      Number(this.test.popularL);

    // 5
    this.LS = Number(this.test.gentilL) +
      Number(this.test.comodinoL) +
      Number(this.test.agradableL) +
      Number(this.test.complacienteL) +
      Number(this.test.simpatizadorL) +
      Number(this.test.ecuanimeL) +
      Number(this.test.generosoL) +
      Number(this.test.consideradoL) +
      Number(this.test.servicialL) +
      Number(this.test.sumisoL) +
      Number(this.test.indiferenteL) +
      Number(this.test.pacienteL) +
      Number(this.test.conformeL) +
      Number(this.test.moderadoL) +
      Number(this.test.indulgenteL) +
      Number(this.test.controladoL) +
      Number(this.test.cohibidoL) +
      Number(this.test.satisfechoL) +
      Number(this.test.buenvecinoL);

    // 3
    this.LC = Number(this.test.humildeL) +
      Number(this.test.temerosoL) +
      Number(this.test.temerosodiosL) +
      Number(this.test.cautelosoL) +
      Number(this.test.docilL) +
      Number(this.test.consecuenteL) +
      Number(this.test.toleranteL) +
      Number(this.test.precisoL) +
      Number(this.test.armoniosoL) +
      Number(this.test.resignadoL) +
      Number(this.test.quisquillosoL) +
      Number(this.test.timidoL) +
      Number(this.test.pacificoL) +
      Number(this.test.estetaL)
    Number(this.test.convencionalL) +
      Number(this.test.devotoL);

    this.TotD = Number(this.MD) - Number(this.LD);
    this.TotI = Number(this.MI) - Number(this.LI);
    this.TotS = Number(this.MS) - Number(this.LS);
    this.TotC = Number(this.MC) - Number(this.LC);


    this.ResultMD = this.arrMD[this.MD];
    this.ResultMI = this.arrMI[this.MI];
    this.ResultMS = this.arrMS[this.MS];
    this.ResultMC = this.arrMC[this.MC];

    this.ResultLD = this.arrLD[this.LD];
    this.ResultLI = this.arrLI[this.LI];
    this.ResultLS = this.arrLS[this.LS];
    this.ResultLC = this.arrLC[this.LC];


    this.ResultTotD = this.arrTD[(this.TotD as number)];
    this.ResultTotI = this.arrTI[(this.TotI as number)];
    this.ResultTotS = this.arrTS[(this.TotS as number)];
    this.ResultTotC = this.arrTC[(this.TotC as number)];


    var arrTotalT: Array<number> = [
      this.ResultTotD,
      this.ResultTotI,
      this.ResultTotS,
      this.ResultTotC,
    ]

    var arrTotalM: Array<number> = [
      this.ResultMD,
      this.ResultMI,
      this.ResultMS,
      this.ResultMC,
    ]

    var arrTotalL: Array<number> = [
      this.ResultLD,
      this.ResultLI,
      this.ResultLS,
      this.ResultLC,
    ]

    var maxFinalT = Math.max(...arrTotalT.map(o => o));
    var maxFinalM = Math.max(...arrTotalM.map(o => o));
    var maxFinalL = Math.max(...arrTotalL.map(o => o));

    this.FinalT = maxFinalT;
    this.FinalM = maxFinalM;
    this.FinalL = maxFinalL;

    this.FinalResult = (this.FinalT + this.FinalM + this.FinalL) / 3;
    this.Result = this.FinalResult.toFixed(0);
    this.message = this.arrInter[(this.Result as number)];


    //this.submitted = true;

    this.test.FinalT = this.FinalT;
    this.test.FinalM = this.FinalM;
    this.test.FinalL = this.FinalL;

    this.test.FinalResult = this.FinalResult;
    this.test.Result = this.Result;
    this.test.message = this.message;




  }

  newTest(): void {
    this.submitted = false;
    this.test = new Test();
  }

  setDuplicateError(value: number): string {
    var message = ""
    if (value == 1)
      message = "ERROR: Seleccione Diferentes categorias";
    return message;
  }

  validateItem(value0: number, value1: number, value2: number, value3: number,
    value4: number, value5: number, value6: number, value7: number
  ): number {
    var sum = value0 + value1 + value2 + value3 + value4 + value5 + value6 + value7;
    if ((value0 == 1) && (value1 == 1)) sum = 0;
    if ((value2 == 1) && (value3 == 1)) sum = 0;
    if ((value4 == 1) && (value5 == 1)) sum = 0;
    if ((value6 == 1) && (value7 == 1)) sum = 0;

    return sum;
  }

  setM1(value: Number): Number {

    this.test.persuasivoM = 0;
    this.test.gentilM = 0;
    this.test.humildeM = 0;
    this.test.originalM = 0;

    if (value == 0) {
      this.test.persuasivoM = 1;
      this.item1Error = this.setDuplicateError(this.test.persuasivoL as number);
    }
    if (value == 1) {
      this.test.gentilM = 1;
      this.item1Error = this.setDuplicateError(this.test.gentilL as number);
    }

    if (value == 2) {
      this.test.humildeM = 1;
      this.item1Error = this.setDuplicateError(this.test.humildeL as number);
    }

    if (value == 3) {
      this.test.originalM = 1;
      this.item1Error = this.setDuplicateError(this.test.originalL as number);
    }


    return 1;
  }

  setL1(value: Number): void {

    this.test.persuasivoL = 0;
    this.test.gentilL = 0;
    this.test.humildeL = 0;
    this.test.originalL = 0;

    if (value == 0) {
      this.test.persuasivoL = 1;
      this.item1Error = this.setDuplicateError(this.test.persuasivoM as number);
      /*
      if (this.test.persuasivoM == 1)
        this.item1Error = "ERROR: Seleccione Diferentes categorias"
     else {
        this.item1Error = "";
      }*/
    }

    if (value == 1) {
      this.test.gentilL = 1;
      this.item1Error = this.setDuplicateError(this.test.gentilM as number);
      /*
      if (this.test.gentilM == 1)
        this.item1Error = "ERROR: Seleccione Diferentes categorias"
      else {
        this.item1Error = "";
      } */
    }
    if (value == 2) {
      this.test.humildeL = 1;
      this.item1Error = this.setDuplicateError(this.test.humildeM as number);
      /*
      if (this.test.humildeM == 1)
        this.item1Error = "ERROR: Seleccione Diferentes categorias"
      else {
        this.item1Error = "";
      } */
    }
    if (value == 3) {
      this.test.originalL = 1;
      this.item1Error = this.setDuplicateError(this.test.originalM as number);
      /*
      if (this.test.originalM == 1)
        this.item1Error = "ERROR: Seleccione Diferentes categorias"
      else {
        this.item1Error = "";
      } */
    }

  }


  setM2(value: Number): Number {

    this.test.fuerzavoluntadM = 0;
    this.test.menteabiertaM = 0;
    this.test.complacienteM = 0;
    this.test.animosoM = 0;

    if (value == 0) {
      this.test.fuerzavoluntadM = 1;
      this.item2Error = this.setDuplicateError(this.test.fuerzavoluntadL as number);

    }

    if (value == 1) {
      this.test.menteabiertaM = 1;
      this.item2Error = this.setDuplicateError(this.test.menteabiertaL as number);

    }
    if (value == 2) {
      this.test.complacienteM = 1;
      this.item2Error = this.setDuplicateError(this.test.competitivoL as number);

    }
    if (value == 3) {
      this.test.animosoM = 1;
      this.item2Error = this.setDuplicateError(this.test.animosoL as number);
    }

    return 1;
  }

  setL2(value: Number): Number {

    this.test.fuerzavoluntadL = 0;
    this.test.menteabiertaL = 0;
    this.test.complacienteL = 0;
    this.test.animosoL = 0;

    if (value == 0) {
      this.test.fuerzavoluntadL = 1;
      this.item2Error = this.setDuplicateError(this.test.fuerzavoluntadM as number);

    }

    if (value == 1) {
      this.test.menteabiertaL = 1;
      this.item2Error = this.setDuplicateError(this.test.menteabiertaM as number);

    }

    if (value == 2) {
      this.test.complacienteL = 1;
      this.item2Error = this.setDuplicateError(this.test.complacienteM as number);
    }

    if (value == 3) {
      this.test.animosoL = 1;
      this.item2Error = this.setDuplicateError(this.test.animosoM as number);
    }
    return 1;
  }

  setM3(value: Number): Number {

    this.test.obedienteM = 0;
    this.test.quisquillosoM = 0;
    this.test.inconquistableM = 0;
    this.test.juguetonM = 0;

    if (value == 0) {
      this.test.obedienteM = 1;
      this.item3Error = this.setDuplicateError(this.test.obedienteL as number);
    }

    if (value == 1) {
      this.test.quisquillosoM = 1;
      this.item3Error = this.setDuplicateError(this.test.quisquillosoL as number);
    }

    if (value == 2) {
      this.test.inconquistableM = 1;
      this.item3Error = this.setDuplicateError(this.test.inconquistableL as number);
    }

    if (value == 3) {
      this.test.juguetonM = 1;
      this.item3Error = this.setDuplicateError(this.test.juguetonL as number);
    }

    return 1;
  }

  setL3(value: Number): Number {

    this.test.obedienteL = 0;
    this.test.quisquillosoL = 0;
    this.test.inconquistableL = 0;
    this.test.juguetonL = 0;

    if (value == 0) {
      this.test.obedienteL = 1;
      this.item3Error = this.setDuplicateError(this.test.obedienteM as number);
    }

    if (value == 1) {
      this.test.quisquillosoL = 1;
      this.item3Error = this.setDuplicateError(this.test.quisquillosoM as number);
    }

    if (value == 2) {
      this.test.inconquistableL = 1;
      this.item3Error = this.setDuplicateError(this.test.inconquistableM as number);
    }

    if (value == 3) {
      this.test.juguetonL = 1;
      this.item3Error = this.setDuplicateError(this.test.juguetonM as number);
    }

    return 1;
  }

  setM4(value: Number): Number {

    this.test.aventureroM = 0;
    this.test.receptivoM = 0;
    this.test.cordialM = 0;
    this.test.moderadoM = 0;

    if (value == 0) {
      this.test.aventureroM = 1;
      this.item4Error = this.setDuplicateError(this.test.aventureroL as number);
    }

    if (value == 1) {
      this.test.receptivoM = 1;
      this.item4Error = this.setDuplicateError(this.test.receptivoL as number);
    }

    if (value == 2) {
      this.test.cordialM = 1;
      this.item4Error = this.setDuplicateError(this.test.cordialL as number);
    }

    if (value == 3) {
      this.test.moderadoM = 1;
      this.item4Error = this.setDuplicateError(this.test.moderadoL as number);
    }

    return 1;
  }

  setL4(value: Number): Number {

    this.test.aventureroL = 0;
    this.test.receptivoL = 0;
    this.test.cordialL = 0;
    this.test.moderadoL = 0;

    if (value == 0) {
      this.test.aventureroL = 1;
      this.item4Error = this.setDuplicateError(this.test.aventureroM as number);
    }

    if (value == 1) {
      this.test.receptivoL = 1;
      this.item4Error = this.setDuplicateError(this.test.receptivoM as number);
    }

    if (value == 2) {
      this.test.cordialL = 1;
      this.item4Error = this.setDuplicateError(this.test.cordialM as number);
    }

    if (value == 3) {
      this.test.moderadoL = 1;
      this.item4Error = this.setDuplicateError(this.test.moderadoM as number);
    }

    return 1;
  }


  setM5(value: Number): Number {

    this.test.agresivoM = 0;
    this.test.almafiestaM = 0;
    this.test.comodinoM = 0;
    this.test.temerosoM = 0;

    if (value == 0) {
      this.test.agresivoM = 1;
      this.item5Error = this.setDuplicateError(this.test.agresivoL as number);
    }

    if (value == 1) {
      this.test.almafiestaM = 1;
      this.item5Error = this.setDuplicateError(this.test.almafiestaL as number);
    }

    if (value == 2) {
      this.test.comodinoM = 1;
      this.item5Error = this.setDuplicateError(this.test.comodinoL as number);
    }

    if (value == 3) {
      this.test.temerosoM = 1;
      this.item5Error = this.setDuplicateError(this.test.temerosoL as number);
    }

    return 1;
  }

  setL5(value: Number): Number {

    this.test.agresivoL = 0;
    this.test.almafiestaL = 0;
    this.test.comodinoL = 0;
    this.test.temerosoL = 0;

    if (value == 0) {
      this.test.agresivoL = 1;
      this.item5Error = this.setDuplicateError(this.test.agresivoM as number);
    }

    if (value == 1) {
      this.test.almafiestaL = 1;
      this.item5Error = this.setDuplicateError(this.test.almafiestaM as number);
    }

    if (value == 2) {
      this.test.comodinoL = 1;
      this.item5Error = this.setDuplicateError(this.test.comodinoM as number);
    }

    if (value == 3) {
      this.test.temerosoL = 1;
      this.item5Error = this.setDuplicateError(this.test.temerosoM as number);
    }

    return 1;
  }

  setM6(value: Number): Number {

    this.test.confiadoM = 0;
    this.test.simpatizadorM = 0;
    this.test.toleranteM = 0;
    this.test.afirmativoM = 0;

    if (value == 0) {
      this.test.confiadoM = 1;
      this.item6Error = this.setDuplicateError(this.test.confiadoL as number);
    }

    if (value == 1) {
      this.test.simpatizadorM = 1;
      this.item6Error = this.setDuplicateError(this.test.simpatizadorL as number);
    }

    if (value == 2) {
      this.test.toleranteM = 1;
      this.item6Error = this.setDuplicateError(this.test.toleranteL as number);
    }

    if (value == 3) {
      this.test.afirmativoM = 1;
      this.item6Error = this.setDuplicateError(this.test.afirmativoL as number);
    }

    return 1;
  }

  setL6(value: Number): Number {

    this.test.confiadoL = 0;
    this.test.simpatizadorL = 0;
    this.test.toleranteL = 0;
    this.test.afirmativoL = 0;

    if (value == 0) {
      this.test.confiadoL = 1;
      this.item6Error = this.setDuplicateError(this.test.confiadoM as number);
    }

    if (value == 1) {
      this.test.simpatizadorL = 1;
      this.item6Error = this.setDuplicateError(this.test.simpatizadorM as number);
    }

    if (value == 2) {
      this.test.toleranteL = 1;
      this.item6Error = this.setDuplicateError(this.test.toleranteM as number);
    }

    if (value == 3) {
      this.test.afirmativoL = 1;
      this.item6Error = this.setDuplicateError(this.test.afirmativoM as number);
    }

    return 1;
  }



  setM7(value: Number): Number {


    this.test.respetuosoM = 0;
    this.test.emprendedorM = 0;
    this.test.optimistaM = 0;
    this.test.servicialM = 0;

    if (value == 0) {
      this.test.respetuosoM = 1;
      this.item7Error = this.setDuplicateError(this.test.respetuosoL as number);
    }

    if (value == 1) {
      this.test.emprendedorM = 1;
      this.item7Error = this.setDuplicateError(this.test.emprendedorL as number);
    }

    if (value == 2) {
      this.test.optimistaM = 1;
      this.item7Error = this.setDuplicateError(this.test.optimistaL as number);
    }

    if (value == 3) {
      this.test.servicialM = 1;
      this.item7Error = this.setDuplicateError(this.test.servicialL as number);
    }

    return 1;
  }

  setL7(value: Number): Number {


    this.test.respetuosoL = 0;
    this.test.emprendedorL = 0;
    this.test.optimistaL = 0;
    this.test.servicialL = 0;

    if (value == 0) {
      this.test.respetuosoL = 1;
      this.item7Error = this.setDuplicateError(this.test.respetuosoM as number);
    }

    if (value == 1) {
      this.test.emprendedorL = 1;
      this.item7Error = this.setDuplicateError(this.test.emprendedorM as number);
    }

    if (value == 2) {
      this.test.optimistaL = 1;
      this.item7Error = this.setDuplicateError(this.test.optimistaM as number);
    }

    if (value == 3) {
      this.test.servicialL = 1;
      this.item7Error = this.setDuplicateError(this.test.servicialM as number);
    }

    return 1;
  }

  setM8(value: Number): Number {


    this.test.indulgenteM = 0;
    this.test.estetaM = 0;
    this.test.vigorosoM = 0;
    this.test.sociableM = 0;

    if (value == 0) {
      this.test.indulgenteM = 1;
      this.item8Error = this.setDuplicateError(this.test.indulgenteL as number);
    }

    if (value == 1) {
      this.test.estetaM = 1;
      this.item8Error = this.setDuplicateError(this.test.estetaL as number);
    }

    if (value == 2) {
      this.test.vigorosoM = 1;
      this.item8Error = this.setDuplicateError(this.test.vigorosoL as number);
    }

    if (value == 3) {
      this.test.sociableM = 1;
      this.item8Error = this.setDuplicateError(this.test.sociableL as number);
    }

    return 1;
  }

  setL8(value: Number): Number {


    this.test.indulgenteL = 0;
    this.test.estetaL = 0;
    this.test.vigorosoL = 0;
    this.test.sociableL = 0;

    if (value == 0) {
      this.test.indulgenteL = 1;
      this.item8Error = this.setDuplicateError(this.test.indulgenteM as number);
    }

    if (value == 1) {
      this.test.estetaL = 1;
      this.item8Error = this.setDuplicateError(this.test.estetaM as number);
    }

    if (value == 2) {
      this.test.vigorosoL = 1;
      this.item8Error = this.setDuplicateError(this.test.vigorosoM as number);
    }

    if (value == 3) {
      this.test.sociableL = 1;
      this.item8Error = this.setDuplicateError(this.test.sociableM as number);
    }

    return 1;
  }

  setM9(value: Number): Number {



    this.test.agradableM = 0;
    this.test.temerosodiosM = 0;
    this.test.tenazM = 0;
    this.test.atractivoM = 0;

    if (value == 0) {
      this.test.agradableM = 1;
      this.item9Error = this.setDuplicateError(this.test.agradableL as number);
    }

    if (value == 1) {
      this.test.temerosodiosM = 1;
      this.item9Error = this.setDuplicateError(this.test.temerosodiosL as number);
    }

    if (value == 2) {
      this.test.tenazM = 1;
      this.item9Error = this.setDuplicateError(this.test.tenazL as number);
    }

    if (value == 3) {
      this.test.atractivoM = 1;
      this.item9Error = this.setDuplicateError(this.test.atractivoL as number);
    }

    return 1;
  }

  setL9(value: Number): Number {



    this.test.agradableL = 0;
    this.test.temerosodiosL = 0;
    this.test.tenazL = 0;
    this.test.atractivoL = 0;

    if (value == 0) {
      this.test.agradableL = 1;
      this.item9Error = this.setDuplicateError(this.test.agradableM as number);
    }

    if (value == 1) {
      this.test.temerosodiosL = 1;
      this.item9Error = this.setDuplicateError(this.test.temerosodiosM as number);
    }

    if (value == 2) {
      this.test.tenazL = 1;
      this.item9Error = this.setDuplicateError(this.test.tenazM as number);
    }

    if (value == 3) {
      this.test.atractivoL = 1;
      this.item9Error = this.setDuplicateError(this.test.atractivoM as number);
    }

    return 1;
  }

  setM10(value: Number): Number {


    this.test.ecuanimeM = 0;
    this.test.precisoM = 0;
    this.test.nerviosoM = 0;
    this.test.jovialM = 0;

    if (value == 0) {
      this.test.ecuanimeM = 1;
      this.item10Error = this.setDuplicateError(this.test.ecuanimeL as number);
    }

    if (value == 1) {
      this.test.precisoM = 1;
      this.item10Error = this.setDuplicateError(this.test.precisoL as number);
    }

    if (value == 2) {
      this.test.nerviosoM = 1;
      this.item10Error = this.setDuplicateError(this.test.nerviosoL as number);
    }

    if (value == 3) {
      this.test.jovialM = 1;
      this.item10Error = this.setDuplicateError(this.test.jovialL as number);
    }

    return 1;
  }

  setL10(value: Number): Number {


    this.test.ecuanimeL = 0;
    this.test.precisoL = 0;
    this.test.nerviosoL = 0;
    this.test.jovialL = 0;

    if (value == 0) {
      this.test.ecuanimeL = 1;
      this.item10Error = this.setDuplicateError(this.test.ecuanimeM as number);
    }

    if (value == 1) {
      this.test.precisoL = 1;
      this.item10Error = this.setDuplicateError(this.test.precisoM as number);
    }

    if (value == 2) {
      this.test.nerviosoL = 1;
      this.item10Error = this.setDuplicateError(this.test.nerviosoM as number);
    }

    if (value == 3) {
      this.test.jovialL = 1;
      this.item10Error = this.setDuplicateError(this.test.jovialM as number);
    }

    return 1;
  }

  setM11(value: Number): Number {


    this.test.valienteM = 0;
    this.test.inspiradorM = 0;
    this.test.sumisoM = 0;
    this.test.timidoM = 0;

    if (value == 0) {
      this.test.valienteM = 1;
      this.item11Error = this.setDuplicateError(this.test.valienteL as number);
    }

    if (value == 1) {
      this.test.inspiradorM = 1;
      this.item11Error = this.setDuplicateError(this.test.inspiradorL as number);
    }

    if (value == 2) {
      this.test.sumisoM = 1;
      this.item11Error = this.setDuplicateError(this.test.sumisoL as number);
    }

    if (value == 3) {
      this.test.timidoM = 1;
      this.item11Error = this.setDuplicateError(this.test.timidoL as number);
    }

    return 1;
  }

  setL11(value: Number): Number {


    this.test.valienteL = 0;
    this.test.inspiradorL = 0;
    this.test.sumisoL = 0;
    this.test.timidoL = 0;

    if (value == 0) {
      this.test.valienteL = 1;
      this.item11Error = this.setDuplicateError(this.test.valienteM as number);
    }

    if (value == 1) {
      this.test.inspiradorL = 1;
      this.item11Error = this.setDuplicateError(this.test.inspiradorM as number);
    }

    if (value == 2) {
      this.test.sumisoL = 1;
      this.item11Error = this.setDuplicateError(this.test.sumisoM as number);
    }

    if (value == 3) {
      this.test.timidoL = 1;
      this.item11Error = this.setDuplicateError(this.test.timidoM as number);
    }

    return 1;
  }

  setM12(value: Number): Number {


    this.test.parlanchinM = 0;
    this.test.controladoM = 0;
    this.test.convencionalM = 0;
    this.test.decisivoM = 0;

    if (value == 0) {
      this.test.parlanchinM = 1;
      this.item12Error = this.setDuplicateError(this.test.parlanchinL as number);
    }

    if (value == 1) {
      this.test.controladoM = 1;
      this.item12Error = this.setDuplicateError(this.test.controladoL as number);
    }

    if (value == 2) {
      this.test.convencionalM = 1;
      this.item12Error = this.setDuplicateError(this.test.convencionalL as number);
    }

    if (value == 3) {
      this.test.decisivoM = 1;
      this.item12Error = this.setDuplicateError(this.test.decisivoL as number);
    }

    return 1;
  }

  setL12(value: Number): Number {


    this.test.parlanchinL = 0;
    this.test.controladoL = 0;
    this.test.convencionalL = 0;
    this.test.decisivoL = 0;

    if (value == 0) {
      this.test.parlanchinL = 1;
      this.item12Error = this.setDuplicateError(this.test.parlanchinM as number);
    }

    if (value == 1) {
      this.test.controladoL = 1;
      this.item12Error = this.setDuplicateError(this.test.controladoM as number);
    }

    if (value == 2) {
      this.test.convencionalL = 1;
      this.item12Error = this.setDuplicateError(this.test.convencionalM as number);
    }

    if (value == 3) {
      this.test.decisivoL = 1;
      this.item12Error = this.setDuplicateError(this.test.decisivoM as number);
    }

    return 1;
  }

  setM13(value: Number): Number {


    this.test.cautelosoM = 0;
    this.test.determinadoM = 0;
    this.test.convincenteM = 0;
    this.test.bonachonM = 0;

    if (value == 0) {
      this.test.cautelosoM = 1;
      this.item13Error = this.setDuplicateError(this.test.cautelosoL as number);
    }

    if (value == 1) {
      this.test.determinadoM = 1;
      this.item13Error = this.setDuplicateError(this.test.determinadoL as number);
    }

    if (value == 2) {
      this.test.convincenteM = 1;
      this.item13Error = this.setDuplicateError(this.test.convincenteL as number);
    }

    if (value == 3) {
      this.test.bonachonM = 1;
      this.item13Error = this.setDuplicateError(this.test.bonachonL as number);
    }

    return 1;
  }


  setL13(value: Number): Number {


    this.test.cautelosoL = 0;
    this.test.determinadoL = 0;
    this.test.convincenteL = 0;
    this.test.bonachonL = 0;

    if (value == 0) {
      this.test.cautelosoL = 1;
      this.item13Error = this.setDuplicateError(this.test.cautelosoM as number);
    }

    if (value == 1) {
      this.test.determinadoL = 1;
      this.item13Error = this.setDuplicateError(this.test.determinadoM as number);
    }

    if (value == 2) {
      this.test.convincenteL = 1;
      this.item13Error = this.setDuplicateError(this.test.convincenteM as number);
    }

    if (value == 3) {
      this.test.bonachonL = 1;
      this.item13Error = this.setDuplicateError(this.test.bonachonM as number);
    }

    return 1;
  }


  setM14(value: Number): Number {


    this.test.disciplinadoM = 0;
    this.test.generosoM = 0;
    this.test.ani_mosoM = 0;
    this.test.persistenteM = 0;

    if (value == 0) {
      this.test.disciplinadoM = 1;
      this.item14Error = this.setDuplicateError(this.test.disciplinadoL as number);
    }

    if (value == 1) {
      this.test.generosoM = 1;
      this.item14Error = this.setDuplicateError(this.test.generosoL as number);
    }

    if (value == 2) {
      this.test.ani_mosoM = 1;
      this.item14Error = this.setDuplicateError(this.test.ani_mosoL as number);
    }

    if (value == 3) {
      this.test.persistenteM = 1;
      this.item14Error = this.setDuplicateError(this.test.persistenteL as number);
    }

    return 1;
  }

  setL14(value: Number): Number {


    this.test.disciplinadoL = 0;
    this.test.generosoL = 0;
    this.test.ani_mosoL = 0;
    this.test.persistenteL = 0;

    if (value == 0) {
      this.test.disciplinadoL = 1;
      this.item14Error = this.setDuplicateError(this.test.disciplinadoM as number);
    }

    if (value == 1) {
      this.test.generosoL = 1;
      this.item14Error = this.setDuplicateError(this.test.generosoM as number);
    }

    if (value == 2) {
      this.test.ani_mosoL = 1;
      this.item14Error = this.setDuplicateError(this.test.ani_mosoM as number);
    }

    if (value == 3) {
      this.test.persistenteL = 1;
      this.item14Error = this.setDuplicateError(this.test.persistenteM as number);
    }

    return 1;
  }

  setM15(value: Number): Number {

    this.test.adaptableM = 0;
    this.test.disputadorM = 0;
    this.test.indiferenteM = 0;
    this.test.sangrelivianaM = 0;

    if (value == 0) {
      this.test.adaptableM = 1;
      this.item15Error = this.setDuplicateError(this.test.adaptableL as number);
    }

    if (value == 1) {
      this.test.disputadorM = 1;
      this.item15Error = this.setDuplicateError(this.test.disputadorL as number);
    }

    if (value == 2) {
      this.test.indiferenteM = 1;
      this.item15Error = this.setDuplicateError(this.test.indiferenteL as number);
    }

    if (value == 3) {
      this.test.sangrelivianaM = 1;
      this.item15Error = this.setDuplicateError(this.test.sangrelivianaL as number);
    }
    return 1;
  }

  setL15(value: Number): Number {

    this.test.adaptableL = 0;
    this.test.disputadorL = 0;
    this.test.indiferenteL = 0;
    this.test.sangrelivianaL = 0;

    if (value == 0) {
      this.test.adaptableL = 1;
      this.item15Error = this.setDuplicateError(this.test.adaptableM as number);
    }

    if (value == 1) {
      this.test.disputadorL = 1;
      this.item15Error = this.setDuplicateError(this.test.disputadorM as number);
    }

    if (value == 2) {
      this.test.indiferenteL = 1;
      this.item15Error = this.setDuplicateError(this.test.indiferenteM as number);
    }

    if (value == 3) {
      this.test.sangrelivianaL = 1;
      this.item15Error = this.setDuplicateError(this.test.sangrelivianaM as number);
    }

    return 1;
  }

  setM16(value: Number): Number {


    this.test.cohibidoM = 0;
    this.test.exactoM = 0;
    this.test.francoM = 0;
    this.test.buencompaneroM = 0;

    if (value == 0) {
      this.test.cohibidoM = 1;
      this.item16Error = this.setDuplicateError(this.test.cohibidoL as number);
    }

    if (value == 1) {
      this.test.exactoM = 1;
      this.item16Error = this.setDuplicateError(this.test.exactoL as number);
    }

    if (value == 2) {
      this.test.francoM = 1;
      this.item16Error = this.setDuplicateError(this.test.francoL as number);
    }

    if (value == 3) {
      this.test.buencompaneroM = 1;
      this.item16Error = this.setDuplicateError(this.test.buencompaneroL as number);
    }

    return 1;
  }

  setL16(value: Number): Number {


    this.test.cohibidoL = 0;
    this.test.exactoL = 0;
    this.test.francoL = 0;
    this.test.buencompaneroL = 0;

    if (value == 0) {
      this.test.cohibidoL = 1;
      this.item16Error = this.setDuplicateError(this.test.cohibidoM as number);
    }

    if (value == 1) {
      this.test.exactoL = 1;
      this.item16Error = this.setDuplicateError(this.test.exactoM as number);
    }

    if (value == 2) {
      this.test.francoL = 1;
      this.item16Error = this.setDuplicateError(this.test.francoM as number);
    }

    if (value == 3) {
      this.test.buencompaneroL = 1;
      this.item16Error = this.setDuplicateError(this.test.buencompaneroM as number);
    }

    return 1;
  }

  setM17(value: Number): Number {

    this.test.docilM = 0;
    this.test.atrevidoM = 0;
    this.test.lealM = 0;
    this.test.encantadorM = 0;

    if (value == 0) {
      this.test.docilM = 1;
      this.item17Error = this.setDuplicateError(this.test.docilL as number);
    }

    if (value == 1) {
      this.test.atrevidoM = 1;
      this.item17Error = this.setDuplicateError(this.test.atrevidoL as number);
    }

    if (value == 2) {
      this.test.lealM = 1;
      this.item17Error = this.setDuplicateError(this.test.lealL as number);
    }

    if (value == 3) {
      this.test.encantadorM = 1;
      this.item17Error = this.setDuplicateError(this.test.encantadorL as number);
    }

    return 1;
  }

  setL17(value: Number): Number {

    this.test.docilL = 0;
    this.test.atrevidoL = 0;
    this.test.lealL = 0;
    this.test.encantadorL = 0;

    if (value == 0) {
      this.test.docilL = 1;
      this.item17Error = this.setDuplicateError(this.test.docilM as number);
    }

    if (value == 1) {
      this.test.atrevidoL = 1;
      this.item17Error = this.setDuplicateError(this.test.atrevidoM as number);
    }

    if (value == 2) {
      this.test.lealL = 1;
      this.item17Error = this.setDuplicateError(this.test.lealM as number);
    }

    if (value == 3) {
      this.test.encantadorL = 1;
      this.item17Error = this.setDuplicateError(this.test.encantadorM as number);
    }

    return 1;
  }

  setM18(value: Number): Number {

    this.test.competitivoM = 0;
    this.test.alegreM = 0;
    this.test.consideradoM = 0;
    this.test.armoniosoM = 0;

    if (value == 0) {
      this.test.competitivoM = 1;
      this.item18Error = this.setDuplicateError(this.test.competitivoL as number);
    }

    if (value == 1) {
      this.test.alegreM = 1;
      this.item18Error = this.setDuplicateError(this.test.alegreL as number);
    }

    if (value == 2) {
      this.test.consideradoM = 1;
      this.item18Error = this.setDuplicateError(this.test.consideradoL as number);
    }

    if (value == 3) {
      this.test.armoniosoM = 1;
      this.item18Error = this.setDuplicateError(this.test.armoniosoL as number);
    }

    return 1;
  }


  setL18(value: Number): Number {

    this.test.competitivoL = 0;
    this.test.alegreL = 0;
    this.test.consideradoL = 0;
    this.test.armoniosoL = 0;

    if (value == 0) {
      this.test.competitivoL = 1;
      this.item18Error = this.setDuplicateError(this.test.competitivoM as number);
    }

    if (value == 1) {
      this.test.alegreL = 1;
      this.item18Error = this.setDuplicateError(this.test.alegreM as number);
    }

    if (value == 2) {
      this.test.consideradoL = 1;
      this.item18Error = this.setDuplicateError(this.test.consideradoM as number);
    }

    if (value == 3) {
      this.test.armoniosoL = 1;
      this.item18Error = this.setDuplicateError(this.test.armoniosoM as number);
    }

    return 1;
  }

  setM19(value: Number): Number {

    this.test.amigueroM = 0;
    this.test.pacienteM = 0;
    this.test.confianzamismoM = 0;
    this.test.mesuradohablarM = 0;

    if (value == 0) {
      this.test.amigueroM = 1;
      this.item19Error = this.setDuplicateError(this.test.amigueroL as number);
    }

    if (value == 1) {
      this.test.pacienteM = 1;
      this.item19Error = this.setDuplicateError(this.test.pacienteL as number);
    }

    if (value == 2) {
      this.test.confianzamismoM = 1;
      this.item19Error = this.setDuplicateError(this.test.confianzamismoL as number);
    }

    if (value == 3) {
      this.test.mesuradohablarM = 1;
      this.item19Error = this.setDuplicateError(this.test.mesuradohablarL as number);
    }

    return 1;
  }

  setL19(value: Number): Number {

    this.test.amigueroL = 0;
    this.test.pacienteL = 0;
    this.test.confianzamismoL = 0;
    this.test.mesuradohablarL = 0;

    if (value == 0) {
      this.test.amigueroL = 1;
      this.item19Error = this.setDuplicateError(this.test.amigueroM as number);
    }

    if (value == 1) {
      this.test.pacienteL = 1;
      this.item19Error = this.setDuplicateError(this.test.pacienteM as number);
    }

    if (value == 2) {
      this.test.confianzamismoL = 1;
      this.item19Error = this.setDuplicateError(this.test.confianzamismoM as number);
    }

    if (value == 3) {
      this.test.mesuradohablarL = 1;
      this.item19Error = this.setDuplicateError(this.test.mesuradohablarM as number);
    }

    return 1;
  }

  setM20(value: Number): Number {


    this.test.diplomaticoM = 0;
    this.test.audazM = 0;
    this.test.refinadoM = 0;
    this.test.satisfechoM = 0;

    if (value == 0) {
      this.test.diplomaticoM = 1;
      this.item20Error = this.setDuplicateError(this.test.diplomaticoL as number);
    }

    if (value == 1) {
      this.test.audazM = 1;
      this.item20Error = this.setDuplicateError(this.test.audazL as number);
    }

    if (value == 2) {
      this.test.refinadoM = 1;
      this.item20Error = this.setDuplicateError(this.test.refinadoL as number);
    }

    if (value == 3) {
      this.test.satisfechoM = 1;
      this.item20Error = this.setDuplicateError(this.test.satisfechoL as number);
    }

    return 1;
  }

  setL20(value: Number): Number {


    this.test.diplomaticoL = 0;
    this.test.audazL = 0;
    this.test.refinadoL = 0;
    this.test.satisfechoL = 0;

    if (value == 0) {
      this.test.diplomaticoL = 1;
      this.item20Error = this.setDuplicateError(this.test.diplomaticoM as number);
    }

    if (value == 1) {
      this.test.audazL = 1;
      this.item20Error = this.setDuplicateError(this.test.audazM as number);
    }

    if (value == 2) {
      this.test.refinadoL = 1;
      this.item20Error = this.setDuplicateError(this.test.refinadoM as number);
    }

    if (value == 3) {
      this.test.satisfechoL = 1;
      this.item20Error = this.setDuplicateError(this.test.satisfechoM as number);
    }

    return 1;
  }

  setM21(value: Number): Number {


    this.test.dispuestoM = 0;
    this.test.deseosoM = 0;
    this.test.consecuenteM = 0;
    this.test.entusiastaM = 0;

    if (value == 0) {
      this.test.dispuestoM = 1;
      this.item21Error = this.setDuplicateError(this.test.dispuestoL as number);
    }

    if (value == 1) {
      this.test.deseosoM = 1;
      this.item21Error = this.setDuplicateError(this.test.deseosoL as number);
    }

    if (value == 2) {
      this.test.consecuenteM = 1;
      this.item21Error = this.setDuplicateError(this.test.consecuenteL as number);
    }

    if (value == 3) {
      this.test.entusiastaM = 1;
      this.item21Error = this.setDuplicateError(this.test.entusiastaL as number);
    }

    return 1;
  }

  setL21(value: Number): Number {


    this.test.dispuestoL = 0;
    this.test.deseosoL = 0;
    this.test.consecuenteL = 0;
    this.test.entusiastaL = 0;

    if (value == 0) {
      this.test.dispuestoL = 1;
      this.item21Error = this.setDuplicateError(this.test.dispuestoM as number);
    }

    if (value == 1) {
      this.test.deseosoL = 1;
      this.item21Error = this.setDuplicateError(this.test.deseosoM as number);
    }

    if (value == 2) {
      this.test.consecuenteL = 1;
      this.item21Error = this.setDuplicateError(this.test.consecuenteM as number);
    }

    if (value == 3) {
      this.test.entusiastaL = 1;
      this.item21Error = this.setDuplicateError(this.test.entusiastaM as number);
    }

    return 1;
  }

  setM22(value: Number): Number {

    this.test.admirableM = 0;
    this.test.bondadosoM = 0;
    this.test.resignadoM = 0;
    this.test.caracterfirmeM = 0;

    if (value == 0) {
      this.test.admirableM = 1;
      this.item22Error = this.setDuplicateError(this.test.admirableL as number);
    }

    if (value == 1) {
      this.test.bondadosoM = 1;
      this.item22Error = this.setDuplicateError(this.test.bondadosoL as number);
    }

    if (value == 2) {
      this.test.resignadoM = 1;
      this.item22Error = this.setDuplicateError(this.test.resignadoL as number);
    }

    if (value == 3) {
      this.test.caracterfirmeM = 1;
      this.item22Error = this.setDuplicateError(this.test.caracterfirmeL as number);
    }

    return 1;
  }


  setL22(value: Number): Number {

    this.test.admirableL = 0;
    this.test.bondadosoL = 0;
    this.test.resignadoL = 0;
    this.test.caracterfirmeL = 0;

    if (value == 0) {
      this.test.admirableL = 1;
      this.item22Error = this.setDuplicateError(this.test.admirableM as number);
    }

    if (value == 1) {
      this.test.bondadosoL = 1;
      this.item22Error = this.setDuplicateError(this.test.bondadosoM as number);
    }

    if (value == 2) {
      this.test.resignadoL = 1;
      this.item22Error = this.setDuplicateError(this.test.resignadoM as number);
    }

    if (value == 3) {
      this.test.caracterfirmeL = 1;
      this.item22Error = this.setDuplicateError(this.test.caracterfirmeM as number);
    }

    return 1;
  }

  setM23(value: Number): Number {

    this.test.conformeM = 0;
    this.test.confiableM = 0;
    this.test.pacificoM = 0;
    this.test.positivoM = 0;

    if (value == 0) {
      this.test.conformeM = 1;
      this.item23Error = this.setDuplicateError(this.test.conformeL as number);
    }

    if (value == 1) {
      this.test.confiableM = 1;
      this.item23Error = this.setDuplicateError(this.test.confiableL as number);
    }

    if (value == 2) {
      this.test.pacificoM = 1;
      this.item23Error = this.setDuplicateError(this.test.pacificoL as number);
    }

    if (value == 3) {
      this.test.positivoM = 1;
      this.item23Error = this.setDuplicateError(this.test.positivoL as number);
    }

    return 1;
  }

  setL23(value: Number): Number {

    this.test.conformeL = 0;
    this.test.confiableL = 0;
    this.test.pacificoL = 0;
    this.test.positivoL = 0;

    if (value == 0) {
      this.test.conformeL = 1;
      this.item23Error = this.setDuplicateError(this.test.conformeM as number);
    }

    if (value == 1) {
      this.test.confiableL = 1;
      this.item23Error = this.setDuplicateError(this.test.confiableM as number);
    }

    if (value == 2) {
      this.test.pacificoL = 1;
      this.item23Error = this.setDuplicateError(this.test.pacificoM as number);
    }

    if (value == 3) {
      this.test.positivoL = 1;
      this.item23Error = this.setDuplicateError(this.test.positivoM as number);
    }

    return 1;
  }

  setM24(value: Number): Number {


    this.test.inquietoM = 0;
    this.test.popularM = 0;
    this.test.buenvecinoM = 0;
    this.test.devotoM = 0;

    if (value == 0) {
      this.test.inquietoM = 1;
      this.item24Error = this.setDuplicateError(this.test.inquietoL as number);
    }

    if (value == 1) {
      this.test.popularM = 1;
      this.item24Error = this.setDuplicateError(this.test.popularL as number);
    }

    if (value == 2) {
      this.test.buenvecinoM = 1;
      this.item24Error = this.setDuplicateError(this.test.buenvecinoL as number);
    }

    if (value == 3) {
      this.test.devotoM = 1;
      this.item24Error = this.setDuplicateError(this.test.devotoL as number);
    }

    return 1;
  }


  setL24(value: Number): Number {


    this.test.inquietoL = 0;
    this.test.popularL = 0;
    this.test.buenvecinoL = 0;
    this.test.devotoL = 0;

    if (value == 0) {
      this.test.inquietoL = 1;
      this.item24Error = this.setDuplicateError(this.test.inquietoM as number);
    }

    if (value == 1) {
      this.test.popularL = 1;
      this.item24Error = this.setDuplicateError(this.test.popularM as number);
    }

    if (value == 2) {
      this.test.buenvecinoL = 1;
      this.item24Error = this.setDuplicateError(this.test.buenvecinoM as number);
    }

    if (value == 3) {
      this.test.devotoL = 1;
      this.item24Error = this.setDuplicateError(this.test.devotoM as number);
    }

    return 1;
  }

}