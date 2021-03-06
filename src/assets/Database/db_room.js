const db_room = [
  {
    room_id: '0',
    id_: '0',
    floor: '5',
    room_name: 'สาขาวิชาวัสดุศาสตร์และนาโนเทคโนโลยี',
    picture: require('../Room/physic.png'),
    contract: {
      website: 'https://physics.sc.kku.ac.th/',
      facebook: '244522058960291',
      telephone: '094-2905230',
      email: 'physics-sc@kku.ac.th',
    },
  },
  {
    room_id: '1',
    id_: '2',
    floor: '1',
    picture: require('../Room/biology.jpg'),
    room_name: 'สาขาวิชาชีววิทยา',
    contract: {
      website: 'https://biology.kku.in.th/',
      facebook: '190044818483',
      telephone: '043-202531 ต่อ 42176',
      email: '-',
    },
  },
  {
    room_id: '2',
    id_: '3',
    floor: '4',
    picture: require('../Room/chemistry.jpg'),
    room_name: 'สาขาวิชาเคมี',
    contract: {
      website: '-',
      facebook: '-',
      telephone: '043-009700 ต่อ 42175',
      email: '-',
    },
  },
  {
    room_id: '3',
    id_: '4',
    floor: '1',
    picture: require('../Room/noImage.jpg'),
    room_name: 'Unit C',
    description:
      'ใช้เป็นห้องจัดอบรม ประชุม หรือสัมมนา และใช้เป็นห้องเรียนในบางครั้ง',
    contract: null,
  },
  {
    room_id: '4',
    id_: '4',
    floor: '1',
    picture: require('../Room/smo.jpg'),
    room_name: 'สโมสรนักศึกษาคณะวิทยาศาสตร์',
    description:
      'เป็นศูนย์กลางการประสานงานและจัดกิจกรรมของนักศึกษาเเละการให้บริการจัดยืมวัสดุ อุปกรณ์เพื่อใช้จัดกิจกรรม',
    contract: {
      website: '-',
      facebook: '236705233045598',
      telephone: '-',
      email: 'science.smo@gmail.com',
    },
  },
  {
    room_id: '5',
    id_: '5',
    floor: '1',
    picture: require('../Room/noImage.jpg'),
    room_name: 'กองบริหารงานคณะวิทยาศาสตร์',
    description:
      'เป็็นส่วนที่ใช้ติดต่อในการบริการนักศึกษาในเรื่องต่าง ๆ เช่นเรื่องค่าธรรมเนียมการศึกษา การลงทะเบียนเรียน',
    contract: null,
  },
  {
    room_id: '6',
    id_: '8',
    floor: '1',
    picture: require('../Room/cs.jpg'),
    room_name: 'สาขาวิชาวิทยาการคอมพิวเตอร์',
    contract: {
      website: 'https://cs.kku.ac.th/index.php/th/',
      facebook: '445696908840673',
      telephone: '043-009700 ต่อ 44456',
      email: '-',
    },
  },
  {
    room_id: '7',
    id_: '5',
    floor: '4',
    picture: require('../Room/stat.jpg'),
    room_name: 'สาขาวิชาสถิติ',
    contract: {
      website: 'http://sc2.kku.ac.th/stat/statweb/index.php',
      facebook: '111413690446241',
      telephone: '043-202-375',
      email: '-',
    },
  },
  {
    room_id: '8',
    id_: '6',
    floor: '1',
    picture: require('../Room/micro.jpg'),
    room_name: 'สาขาวิชาจุลชีววิทยา',
    contract: {
      website: 'https://micro.sc.kku.ac.th/index.php/th/',
      facebook: '122629404483949',
      telephone: '043-202-377 ต่อ 42946',
      email: 'scmicrokku@kku.ac.th',
    },
  },
  {
    room_id: '9',
    id_: '6',
    floor: '1',
    picture: require('../Room/biochemistry.jpg'),
    room_name: 'สาขาวิชาชีวเคมี',
    contract: {
      website: 'http://sc2.kku.ac.th/biochem/index.php/th/',
      facebook: '1754513781508475',
      telephone: '043-202371 ต่อ 44478-79',
      email: 'narin@kku.ac.th',
    },
  },
  {
    room_id: '10',
    id_: '6',
    floor: '2',
    picture: require('../Room/math.jpg'),
    room_name: 'สาขาวิชาคณิตศาสตร์',
    contract: {
      website: 'https://math.kku.ac.th/math20/',
      facebook: '1754513781508475',
      telephone: '043-009700 ต่อ 42310',
      email: 'theeth@kku.ac.th',
    },
  },
  {
    room_id: '11',
    id_: '6',
    floor: '4',
    picture: require('../Room/noImage.jpg'),
    room_name: 'ห้องพิมล กลกิจ',
    description:
      'เป็นห้องเล็คเชอร์ หรือเพื่อใช้ในงานเลี้ยง งานประชุมและจัดกิจกรรมอบรมต่าง ๆ',
    contract: null,
  },
  {
    room_id: '12',
    id_: '7',
    floor: 'B',
    picture: require('../Room/noImage.jpg'),
    room_name: 'ใต้ถุน',
    description:
      'เป็นที่ไว้สำหรับนัดทำกิจกรรมต่าง ๆ ของคณะ และ เป็นที่ตั้งของห้องชมรมต่าง ๆ',
    contract: null,
  },
  {
    room_id: '13',
    id_: '7',
    floor: '1',
    picture: require('../Room/noImage.jpg'),
    room_name: 'สาขาวิชาวิทยาศาสตร์สิ่งแวดล้อม',
    contract: {
      website: 'https://env.sc.kku.ac.th/',
      facebook: '1754513781508475',
      telephone: '043-203-276',
      email: 'adcpag@kku.ac.th',
    },
  },
  {
    room_id: '14',
    id_: '8',
    floor: '1',
    picture: require('../Room/ห้องประชุมวิทยวิภาส.jpg'),
    room_name: 'ห้องประชุมวิทยวิภาส 1',
    description: 'เป็นห้องขนาดใหญ่ใช้ในการประชุมหรือจัดอบรมสัมนาต่าง ๆ',
    contract: null,
  },
  {
    room_id: '15',
    id_: '8',
    floor: '2',
    picture: require('../Room/ห้องประชุมวิทยวิภาส.jpg'),
    room_name: 'ห้องประชุมวิทยวิภาส 2',
    description: 'เป็นห้องขนาดใหญ่ใช้ในการประชุมหรือจัดอบรมสัมนาต่าง ๆ',
    contract: null,
  },
  {
    room_id: '16',
    id_: '8',
    floor: '3',
    picture: require('../Room/ห้องประชุมวิทยวิภาส.jpg'),
    room_name: 'ห้องประชุมวิทยวิภาส 3',
    description: 'เป็นห้องขนาดใหญ่ใช้ในการประชุมหรือจัดอบรมสัมนาต่าง ๆ',
    contract: null,
  },
  {
    room_id: '17',
    id_: '8',
    floor: '3',
    picture: require('../Room/physic.png'),
    room_name: 'สาขาวิชาฟิสิกส์',
    contract: {
      website: 'https://physics.sc.kku.ac.th/',
      facebook: '244522058960291',
      telephone: '094-2905230',
      email: 'physics-sc@kku.ac.th',
    },
  },
];

export default db_room;
