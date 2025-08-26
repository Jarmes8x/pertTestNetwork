class ExamSystem {
    constructor() {
        this.questions = this.loadQuestions();
        this.currentQuestionIndex = 0;
        this.userAnswers = {};
        this.timeRemaining = 60 * 60; // 60 นาที
        this.timer = null;
        this.isExamStarted = false;
        
        this.initializeElements();
        this.bindEvents();
        this.showWelcomeScreen();
    }

    // โหลดข้อสอบจากข้อมูลที่กำหนด
    loadQuestions() {
        return [
            {
                id: 1,
                question: "องค์ประกอบหลักของ Data Communication มี _______ ส่วน ได้แก่ Message, Sender, Receiver, Medium และ _______",
                choices: [
                    "3, Channel",
                    "4, Protocol", 
                    "5, Protocol",
                    "6, Control",
                    "5, Rule"
                ],
                correctAnswer: 2,
                explanation: "Data Communication มี 5 องค์ประกอบหลัก คือ Message, Sender, Receiver, Medium และ Protocol"
            },
            {
                id: 2,
                question: "การสื่อสารข้อมูลแบบ _______ คือการสื่อสารที่ข้อมูลไหลได้ทิศทางเดียว เช่น keyboard หรือ monitor",
                choices: [
                    "Full-duplex",
                    "Half-duplex",
                    "Simplex",
                    "Unicast",
                    "Multicast"
                ],
                correctAnswer: 2,
                explanation: "Simplex คือการสื่อสารที่ข้อมูลไหลได้ทิศทางเดียวเท่านั้น เช่น keyboard (ส่งข้อมูลเข้าคอมพิวเตอร์) หรือ monitor (รับข้อมูลจากคอมพิวเตอร์)"
            },
            {
                id: 3,
                question: "การสื่อสารข้อมูลแบบ _______ คือการสื่อสารที่ข้อมูลไหลได้สองทิศทาง แต่ครั้งละทิศทางเดียว เช่น walkie talkie",
                choices: [
                    "Full-duplex",
                    "Half-duplex",
                    "Simplex",
                    "Broadcast",
                    "Multimode"
                ],
                correctAnswer: 1,
                explanation: "Half-duplex คือการสื่อสารที่ข้อมูลไหลได้สองทิศทาง แต่ในเวลาใดเวลาหนึ่งจะไหลได้ทิศทางเดียว เช่น walkie talkie"
            },
            {
                id: 4,
                question: "ในการต่อเชื่อมแบบ Fully connected mesh topology สำหรับอุปกรณ์ n ตัว จะต้องใช้สายเคเบิล _______ เส้น",
                choices: [
                    "n²",
                    "n(n–1)",
                    "n(n–1)/2",
                    "2n",
                    "n+1"
                ],
                correctAnswer: 2,
                explanation: "ในการเชื่อมต่อแบบ Fully connected mesh, แต่ละอุปกรณ์ต้องเชื่อมต่อกับอุปกรณ์อื่นทุกตัว สูตรคือ n(n-1)/2"
            },
            {
                id: 5,
                question: "ข้อดีหลักของ Star topology คือหาก node หนึ่งเสีย จะไม่กระทบกับ _______ อื่น",
                choices: [
                    "Server",
                    "Switch",
                    "Hub",
                    "Node",
                    "Router"
                ],
                correctAnswer: 3,
                explanation: "ข้อดีของ Star topology คือหาก node ใดเสีย จะไม่กระทบต่อ node อื่น ๆ ในเครือข่าย"
            },
            {
                id: 6,
                question: "ใน Internet model มี _______ layers ได้แก่ Physical, Data Link, Network, Transport และ Application layer",
                choices: [
                    "4",
                    "5",
                    "6",
                    "7",
                    "8"
                ],
                correctAnswer: 1,
                explanation: "Internet model (TCP/IP model) มี 5 layers คือ Physical, Data Link, Network, Transport และ Application"
            },
            {
                id: 7,
                question: "_______ layer มีหน้าที่รับผิดชอบในการส่ง individual bits จาก node หนึ่งไปยัง node ถัดไป",
                choices: [
                    "Physical",
                    "Data Link",
                    "Network",
                    "Transport",
                    "Application"
                ],
                correctAnswer: 0,
                explanation: "Physical layer มีหน้าที่ส่ง individual bits ผ่านสื่อกลางทางกายภาพ"
            },
            {
                id: 8,
                question: "Data Link layer มีหน้าที่ส่ง _______ จาก node หนึ่งไปยัง node ถัดไป",
                choices: [
                    "Bits",
                    "Frames",
                    "Packets",
                    "Messages",
                    "Signals"
                ],
                correctAnswer: 1,
                explanation: "Data Link layer จัดการการส่ง frames ระหว่าง nodes ที่อยู่ติดกัน"
            },
            {
                id: 9,
                question: "Network layer มีหน้าที่ส่ง _______ จาก source ต้นทางไปยัง destination ปลายทาง",
                choices: [
                    "Frames",
                    "Bits",
                    "Packets",
                    "Segments",
                    "Messages"
                ],
                correctAnswer: 2,
                explanation: "Network layer รับผิดชอบในการส่ง packets จากต้นทางไปยังปลายทาง"
            },
            {
                id: 10,
                question: "Transport layer มีหน้าที่ส่ง message จาก _______ หนึ่งไปยัง _______ อื่น",
                choices: [
                    "Host, Host",
                    "Device, Device", 
                    "Process, Process",
                    "Router, Switch",
                    "User, Server"
                ],
                correctAnswer: 2,
                explanation: "Transport layer จัดการการส่ง messages ระหว่าง processes ที่ทำงานอยู่ในเครื่องต่าง ๆ"
            },
            // เพิ่มข้อสอบเพิ่มเติม...
            {
                id: 11,
                question: "ใน OSI model มี _______ layers ซึ่งมากกว่า Internet model",
                choices: [
                    "4",
                    "5", 
                    "6",
                    "7",
                    "8"
                ],
                correctAnswer: 3,
                explanation: "OSI model มี 7 layers ซึ่งมากกว่า Internet model ที่มี 5 layers"
            },
            {
                id: 12,
                question: "ใน Unipolar encoding จะใช้ voltage level เพียง _______ ระดับเท่านั้น",
                choices: [
                    "1",
                    "2",
                    "3", 
                    "4",
                    "5"
                ],
                correctAnswer: 0,
                explanation: "Unipolar encoding ใช้ voltage level เพียง 1 ระดับ (เช่น 0V และ +5V หรือเพียง +5V)"
            },
            {
                id: 13,
                question: "ใน Polar encoding จะใช้ voltage level _______ ระดับ คือ positive และ negative",
                choices: [
                    "1",
                    "2",
                    "3",
                    "4", 
                    "5"
                ],
                correctAnswer: 1,
                explanation: "Polar encoding ใช้ 2 voltage levels คือ positive และ negative"
            },
            {
                id: 14,
                question: "ใน NRZ-L encoding ระดับของสัญญาณจะขึ้นอยู่กับ _______ ของ bit",
                choices: [
                    "Transition",
                    "Inversion",
                    "State",
                    "Frequency",
                    "Phase"
                ],
                correctAnswer: 2,
                explanation: "ใน NRZ-L (Non-Return-to-Zero Level) ระดับของสัญญาณขึ้นอยู่กับสถานะ (state) ของ bit"
            },
            {
                id: 15,
                question: "ใน NRZ-I encoding สัญญาณจะ _______ เมื่อพบ bit 1",
                choices: [
                    "คงที่",
                    "เปลี่ยนแปลง (inverted)",
                    "เพิ่มขึ้น",
                    "ลดลง",
                    "หายไป"
                ],
                correctAnswer: 1,
                explanation: "ใน NRZ-I (Non-Return-to-Zero Inverted) สัญญาณจะเปลี่ยนแปลง (invert) เมื่อพบ bit 1"
            },
            // เพิ่มข้อสอบต่อไป...
            {
                id: 16,
                question: "_______ encoding ใช้ 3 levels คือ positive, zero และ negative",
                choices: [
                    "Unipolar",
                    "Polar",
                    "Bipolar",
                    "NRZ",
                    "ASK"
                ],
                correctAnswer: 2,
                explanation: "Bipolar encoding ใช้ 3 voltage levels: positive, zero, และ negative"
            },
            {
                id: 17,
                question: "ใน Manchester encoding จะมีการเปลี่ยนแปลงสัญญาณใน _______ ของแต่ละ bit period",
                choices: [
                    "ต้น",
                    "กลาง",
                    "ปลาย",
                    "สุ่ม",
                    "ไม่เปลี่ยนเลย"
                ],
                correctAnswer: 1,
                explanation: "Manchester encoding มีการเปลี่ยนแปลงสัญญาณในช่วงกลางของแต่ละ bit period"
            },
            {
                id: 18,
                question: "_______ rate คือจำนวน bits ต่อวินาที ส่วน _______ rate คือจำนวน signal units ต่อวินาที",
                choices: [
                    "Bit, Baud",
                    "Baud, Bit",
                    "Symbol, Bit",
                    "Frequency, Symbol",
                    "Signal, Bit"
                ],
                correctAnswer: 0,
                explanation: "Bit rate คือจำนวน bits ต่อวินาที, Baud rate คือจำนวน signal units ต่อวินาที"
            },
            {
                id: 19,
                question: "หาก analog signal carries 4 bits ใน signal unit หนึ่ง และส่ง 1000 signal units ต่อวินาที bit rate จะเท่ากับ _______ bps",
                choices: [
                    "1000",
                    "2000",
                    "3000",
                    "4000",
                    "5000"
                ],
                correctAnswer: 3,
                explanation: "Bit rate = Baud rate × จำนวน bits ต่อ signal unit = 1000 × 4 = 4000 bps"
            },
            {
                id: 20,
                question: "หาก bit rate เท่ากับ 3000 และแต่ละ signal unit carries 6 bits baud rate จะเท่ากับ _______ baud/s",
                choices: [
                    "250",
                    "400",
                    "500",
                    "600",
                    "700"
                ],
                correctAnswer: 2,
                explanation: "Baud rate = Bit rate ÷ จำนวน bits ต่อ signal unit = 3000 ÷ 6 = 500 baud/s"
            },
            // Digital-to-Analog Modulation
            {
                id: 21,
                question: "ใน ASK (Amplitude Shift Keying) จะมีการเปลี่ยนแปลง _______ ของสัญญาณ",
                choices: [
                    "Frequency",
                    "Phase",
                    "Amplitude",
                    "Voltage",
                    "Duration"
                ],
                correctAnswer: 2,
                explanation: "ASK (Amplitude Shift Keying) เป็นการเปลี่ยนแปลง Amplitude ของสัญญาณ"
            },
            {
                id: 22,
                question: "ใน FSK (Frequency Shift Keying) จะมีการเปลี่ยนแปลง _______ ของสัญญาณ",
                choices: [
                    "Frequency",
                    "Phase",
                    "Amplitude",
                    "Wavelength",
                    "Power"
                ],
                correctAnswer: 0,
                explanation: "FSK (Frequency Shift Keying) เป็นการเปลี่ยนแปลง Frequency ของสัญญาณ"
            },
            {
                id: 23,
                question: "ใน PSK (Phase Shift Keying) จะมีการเปลี่ยนแปลง _______ ของสัญญาณ",
                choices: [
                    "Frequency",
                    "Phase",
                    "Amplitude",
                    "Voltage",
                    "Signal rate"
                ],
                correctAnswer: 1,
                explanation: "PSK (Phase Shift Keying) เป็นการเปลี่ยนแปลง Phase ของสัญญาณ"
            },
            {
                id: 24,
                question: "QAM ย่อมาจาก _______ Amplitude Modulation ซึ่งเป็นการผสมผสานระหว่าง _______ และ _______",
                choices: [
                    "Quadrature, ASK, FSK",
                    "Quadrature, ASK, PSK",
                    "Quantum, FSK, PSK",
                    "Quadrature, FSK, TDM",
                    "Quality, ASK, PSK"
                ],
                correctAnswer: 1,
                explanation: "QAM ย่อมาจาก Quadrature Amplitude Modulation ซึ่งผสมผสาน ASK และ PSK"
            },
            // Multiplexing
            {
                id: 25,
                question: "FDM ย่อมาจาก _______ Division Multiplexing ซึ่งเป็นเทคนิคการ multiplex แบบ _______",
                choices: [
                    "Frequency, Analog",
                    "Frequency, Digital",
                    "Frame, Analog",
                    "Frequency, Optical",
                    "Frequency, Hybrid"
                ],
                correctAnswer: 0,
                explanation: "FDM ย่อมาจาก Frequency Division Multiplexing เป็นเทคนิค analog multiplexing"
            },
            {
                id: 26,
                question: "TDM ย่อมาจาก _______ Division Multiplexing ซึ่งเป็นเทคนิคการ multiplex แบบ _______",
                choices: [
                    "Time, Analog",
                    "Time, Digital",
                    "Transmission, Digital",
                    "Token, Analog",
                    "Terminal, Hybrid"
                ],
                correctAnswer: 1,
                explanation: "TDM ย่อมาจาก Time Division Multiplexing เป็นเทคนิค digital multiplexing"
            },
            {
                id: 27,
                question: "WDM ย่อมาจาก _______ Division Multiplexing ซึ่งใช้สำหรับ _______ signals",
                choices: [
                    "Wave, Digital",
                    "Wide, Radio",
                    "Wavelength, Optical",
                    "Wireless, Analog",
                    "Wave, Hybrid"
                ],
                correctAnswer: 2,
                explanation: "WDM ย่อมาจาก Wavelength Division Multiplexing ใช้สำหรับ optical signals"
            },
            // Transmission Media
            {
                id: 28,
                question: "UTP cable category _______ มี bandwidth 100 MHz และ data rate 100 Mbps",
                choices: [
                    "Cat 3",
                    "Cat 4",
                    "Cat 5",
                    "Cat 6",
                    "Cat 7"
                ],
                correctAnswer: 2,
                explanation: "UTP cable Category 5 มี bandwidth 100 MHz และ data rate 100 Mbps"
            },
            {
                id: 29,
                question: "ใน fiber optic cable แบบ single-mode จะมี core size _______ µm",
                choices: [
                    "25",
                    "50",
                    "62.5",
                    "8–10",
                    "100"
                ],
                correctAnswer: 3,
                explanation: "Fiber optic cable แบบ single-mode มี core size ประมาณ 8-10 µm (โดยทั่วไปคือ 9 µm)"
            },
            {
                id: 30,
                question: "Radio waves เหมาะสำหรับการสื่อสารแบบ _______ เช่น radio และ television ส่วน Microwaves เหมาะสำหรับการสื่อสารแบบ _______ เช่น cellular telephone",
                choices: [
                    "Unicast, Broadcast",
                    "Broadcast, Unicast", 
                    "Multicast, Unicast",
                    "Broadcast, Multicast",
                    "Hybrid, Digital"
                ],
                correctAnswer: 1,
                explanation: "Radio waves เหมาะสำหรับ Broadcast (กระจายเสียง), Microwaves เหมาะสำหรับ Unicast (โทรศัพท์มือถือ)"
            },
            // เพิ่มข้อสอบจากส่วนที่ 2
            {
                id: 31,
                question: "สัญญาณชนิดใดมีความต่อเนื่องในช่วงเวลาหรือพื้นที่และสามารถมีค่าระดับแอมพลิจูดได้อย่างไม่จำกัด?",
                choices: [
                    "สัญญาณดิจิทัล",
                    "สัญญาณอนาล็อก",
                    "สัญญาณพัลส์",
                    "สัญญาณกึ่งต่อเนื่อง",
                    "สัญญาณเสียง"
                ],
                correctAnswer: 1,
                explanation: "สัญญาณอนาล็อกมีความต่อเนื่องและสามารถมีค่าแอมพลิจูดได้อย่างไม่จำกัด"
            },
            {
                id: 32,
                question: "ความถี่ (Frequency) ของสัญญาณหมายถึงอะไร?",
                choices: [
                    "จำนวนรอบของสัญญาณในหนึ่งวินาที",
                    "ความกว้างของคลื่นในเชิงความถี่",
                    "ระยะเวลาที่ใช้ในการเปลี่ยนแปลงสัญญาณหนึ่งรอบ",
                    "ค่าความแรงสูงสุดของสัญญาณ",
                    "ค่าความแรงต่ำสุดของสัญญาณ"
                ],
                correctAnswer: 0,
                explanation: "ความถี่ (Frequency) คือจำนวนรอบของสัญญาณที่เกิดขึ้นในหนึ่งวินาที"
            },
            {
                id: 33,
                question: "ถ้าสัญญาณไม่มีการเปลี่ยนแปลงเลยในช่วงเวลาหนึ่ง สัญญาณนั้นเป็นประเภทอะไร?",
                choices: [
                    "สัญญาณแบบต่อเนื่อง",
                    "สัญญาณสุ่ม",
                    "สัญญาณความถี่สูงสุด",
                    "สัญญาณคงที่หรือไม่มีความถี่ (ความถี่เป็นศูนย์)",
                    "สัญญาณกวน"
                ],
                correctAnswer: 3,
                explanation: "หากสัญญาณไม่มีการเปลี่ยนแปลง จะเป็นสัญญาณคงที่ซึ่งมีความถี่เป็นศูนย์"
            },
            {
                id: 34,
                question: "Bandwidth หมายถึงอะไรในบริบทของการสื่อสาร?",
                choices: [
                    "ความเร็วในการส่งข้อมูล ( bitrate )",
                    "ช่วงความถี่ที่สื่อสามารถรับส่งสัญญาณได้อย่างมีประสิทธิภาพ",
                    "จำนวนบิตต่อวินาทีที่ส่งผ่านระบบ",
                    "ความแรงของสัญญาณ",
                    "ช่วงเวลาที่ใช้ส่งข้อมูล 1 บิต"
                ],
                correctAnswer: 1,
                explanation: "Bandwidth คือช่วงความถี่ที่สื่อสามารถรับส่งสัญญาณได้อย่างมีประสิทธิภาพ"
            },
            {
                id: 35,
                question: "ระยะเวลาที่ใช้ในการส่งข้อมูลหนึ่งบิตเรียกว่าหรือเรียกอีกชื่อว่าอะไร?",
                choices: [
                    "Bit rate",
                    "Bit interval",
                    "Bandwidth",
                    "Signal duration",
                    "Data window"
                ],
                correctAnswer: 1,
                explanation: "ระยะเวลาที่ใช้ส่งข้อมูล 1 บิต เรียกว่า Bit interval"
            },
            {
                id: 36,
                question: "สัญญาณใดที่มีการเปลี่ยนแปลงระดับอย่างฉับพลันและเป็นช่วงสั้น ๆ?",
                choices: [
                    "สัญญาณอนาล็อก",
                    "สัญญาณพัลส์ (Pulse)",
                    "สัญญาณต่อเนื่อง",
                    "สัญญาณเสียง",
                    "สัญญาณลดความถี่"
                ],
                correctAnswer: 1,
                explanation: "สัญญาณพัลส์ (Pulse) มีการเปลี่ยนแปลงระดับอย่างฉับพลันและเป็นช่วงสั้น ๆ"
            },
            {
                id: 37,
                question: "วิธีการแปลงสัญญาณอนาล็อกเป็นดิจิทัลเรียกว่าอะไร?",
                choices: [
                    "การสุ่มสัญญาณ",
                    "การเข้ารหัสแบบอนาล็อก",
                    "การแซมเปิลและปรับค่าเป็นตัวเลข (Sampling and Quantization)",
                    "การเผื่อแผ่ข้อมูล",
                    "การปรับแต่งความถี่"
                ],
                correctAnswer: 2,
                explanation: "การแปลงสัญญาณอนาล็อกเป็นดิจิทัล ใช้กระบวนการ Sampling และ Quantization"
            },
            {
                id: 38,
                question: "สัญญาณดิจิทัลมีลักษณะอย่างไร?",
                choices: [
                    "มีระดับแอมพลิจูดต่อเนื่องและไม่มีการตัดสินใจชัดเจน",
                    "มีระดับแอมพลิจูดที่เป็นค่าคงที่และไม่เปลี่ยนแปลง",
                    "ประกอบด้วยค่าแยกต่าง ๆ ที่เป็นกลุ่มตัวเลข (ระดับ)",
                    "เป็นสัญญาณความถี่สูงเท่านั้น",
                    "เป็นสัญญาณความเร็วต่ำเสมอไป"
                ],
                correctAnswer: 2,
                explanation: "สัญญาณดิจิทัลประกอบด้วยค่าแยกต่าง ๆ ที่เป็นกลุ่มตัวเลข มีระดับที่ชัดเจน"
            },
            {
                id: 39,
                question: "สัญญาณที่ใช้ในระบบดิจิทัลมีข้อดีข้อใด?",
                choices: [
                    "มีความทนทานต่อเสียงรบกวนสูง",
                    "มีความไวต่อสัญญาณรบกวนสูง",
                    "ไม่สามารถแปลงเป็นสัญญาณอะนาล็อกได้",
                    "มีขนาดข้อมูลน้อยกว่าสัญญาณอนาล็อก",
                    "มีความสามารถในการบีบอัดข้อมูลน้อยที่สุด"
                ],
                correctAnswer: 0,
                explanation: "สัญญาณดิจิทัลมีความทนทานต่อเสียงรบกวนสูง เพราะมีระดับที่ชัดเจน"
            },
            {
                id: 40,
                question: "บทบาทของเครื่องแปลงสัญญาณ (Transducer) ในระบบการสื่อสารคืออะไร?",
                choices: [
                    "แปลงสัญญาณจากแอมพลิจูดเป็นความเร็ว",
                    "รวบรวมสัญญาณและส่งออกเป็นสัญญาณอื่น",
                    "แปลงสัญญาณจากภาพเป็นเสียง",
                    "แปลงสัญญาณจากรูปแบบหนึ่งเป็นอีกรูปแบบหนึ่ง",
                    "เข้ารหัสและถอดรหัสข้อมูลเท่านั้น"
                ],
                correctAnswer: 3,
                explanation: "Transducer มีหน้าที่แปลงสัญญาณจากรูปแบบหนึ่งเป็นอีกรูปแบบหนึ่ง"
            },
            // เพิ่มข้อสอบจนครบ 50 ข้อ
            {
                id: 41,
                question: "ข้อใดคือลักษณะของการเข้ารหัสแบบ Unipolar?",
                choices: [
                    "ใช้ voltage ทั้งบวกและลบ",
                    "มีการซิงโครไนซ์ในตัว",
                    "ใช้ voltage เพียงด้านเดียว (บวก หรือ ลบ)",
                    "มีการเปลี่ยนแปลงกลางช่วง bit",
                    "ใช้ 3 ระดับ voltage"
                ],
                correctAnswer: 2,
                explanation: "Unipolar encoding ใช้ voltage เพียงด้านเดียว ไม่มีการซิงโครไนซ์ในตัว"
            },
            {
                id: 42,
                question: "ในการเข้ารหัสแบบ NRZ-I สัญญาณจะเปลี่ยนแปลงเมื่อไหร่?",
                choices: [
                    "เมื่อพบ bit 0",
                    "เมื่อพบ bit 1", 
                    "ทุกครึ่งช่วง bit period",
                    "ไม่มีการเปลี่ยนแปลงเลย",
                    "เมื่อเริ่มต้น bit period"
                ],
                correctAnswer: 1,
                explanation: "NRZ-I (Inverted) จะมีการเปลี่ยนแปลงสัญญาณเมื่อพบ bit 1"
            },
            {
                id: 43,
                question: "Manchester encoding มีข้อดีอย่างไร?",
                choices: [
                    "ใช้ bandwidth น้อย",
                    "มีการซิงโครไนซ์ในตัว (self-synchronizing)",
                    "ส่งข้อมูลได้เร็วกว่า",
                    "ใช้พลังงานน้อย",
                    "ไม่มี DC component"
                ],
                correctAnswer: 1,
                explanation: "Manchester encoding มีการเปลี่ยนแปลงกลางช่วง bit ทำให้มีการซิงโครไนซ์ในตัว"
            },
            {
                id: 44,
                question: "ถ้า Baud rate = 1200 และแต่ละ signal element carries 3 bits จะได้ Bit rate เท่าไหร่?",
                choices: [
                    "400 bps",
                    "1200 bps",
                    "2400 bps", 
                    "3600 bps",
                    "4800 bps"
                ],
                correctAnswer: 3,
                explanation: "Bit rate = Baud rate × bits per signal element = 1200 × 3 = 3600 bps"
            },
            {
                id: 45,
                question: "ข้อใดเป็นข้อเสียของ Amplitude Shift Keying (ASK)?",
                choices: [
                    "ความซับซ้อนในการสร้าง",
                    "ความไวต่อสัญญาณรบกวน (noise susceptible)",
                    "ใช้ bandwidth มาก",
                    "ความเร็วในการส่งต่ำ",
                    "ราคาแพง"
                ],
                correctAnswer: 1,
                explanation: "ASK มีความไวต่อสัญญาณรบกวนเพราะอาศัยการเปลี่ยน amplitude ซึ่งง่ายต่อการรบกวน"
            },
            {
                id: 46,
                question: "ในระบบ TDM แต่ละ channel จะได้รับ time slot เท่า ๆ กันหรือไม่?",
                choices: [
                    "ใช่ ได้รับเท่า ๆ กัน",
                    "ไม่ ขึ้นกับความต้องการ",
                    "ได้รับตามลำดับความสำคัญ", 
                    "ได้รับตามขนาดข้อมูล",
                    "สุ่มการแบ่ง"
                ],
                correctAnswer: 0,
                explanation: "ใน TDM แต่ละ channel จะได้รับ time slot เท่า ๆ กันตามลำดับ"
            },
            {
                id: 47,
                question: "Guard band ใน FDM มีประโยชน์อย่างไร?",
                choices: [
                    "เพิ่มความเร็วในการส่ง",
                    "ลดต้นทุน",
                    "ป้องกันการรบกวนระหว่าง channel",
                    "เพิ่มจำนวน channel",
                    "ลดพลังงานที่ใช้"
                ],
                correctAnswer: 2,
                explanation: "Guard band ใช้แยกความถี่ระหว่าง channel เพื่อป้องกันการรบกวนกัน"
            },
            {
                id: 48,
                question: "Twisted pair cable ประเภทใดเหมาะสำหรับ Gigabit Ethernet?",
                choices: [
                    "Cat 3",
                    "Cat 5",
                    "Cat 5e หรือสูงกว่า",
                    "Cat 4",
                    "Cat 1"
                ],
                correctAnswer: 2,
                explanation: "Gigabit Ethernet ต้องการ Cat 5e หรือสูงกว่า เพื่อรองรับ bandwidth ที่สูง"
            },
            {
                id: 49,
                question: "Multimode fiber optic cable เหมาะสำหรับระยะทางใด?",
                choices: [
                    "ระยะทางไกลมาก (> 100 km)",
                    "ระยะทางกลาง (2-100 km)",
                    "ระยะทางใกล้ (< 2 km)",
                    "ทุกระยะทางเท่า ๆ กัน",
                    "ใช้ภายในอาคารเท่านั้น"
                ],
                correctAnswer: 2,
                explanation: "Multimode fiber เหมาะสำหรับระยะทางใกล้ เพราะมี modal dispersion สูง"
            },
            {
                id: 50,
                question: "ข้อใดคือข้อดีหลักของการใช้ Optical fiber?",
                choices: [
                    "ราคาถูก",
                    "ติดตั้งง่าย",
                    "ความจุสูง และ ไม่ได้รับผลกระทบจากสัญญาณรบกวนแม่เหล็กไฟฟ้า",
                    "ใช้งานกับอุปกรณ์เดิมได้",
                    "ซ่อมแซมง่าย"
                ],
                correctAnswer: 2,
                explanation: "Optical fiber มีความจุสูง ความเร็วสูง และไม่ได้รับผลกระทบจาก EMI"
            }
        ];
    }

    // ผูก event listeners
    bindEvents() {
        document.getElementById('beginExam').addEventListener('click', () => this.startExam());
        document.getElementById('startExam').addEventListener('click', () => this.startExam());
        document.getElementById('reviewMode').addEventListener('click', () => this.showReviewMode());
        document.getElementById('resetExam').addEventListener('click', () => this.resetExam());
        document.getElementById('prevBtn').addEventListener('click', () => this.previousQuestion());
        document.getElementById('nextBtn').addEventListener('click', () => this.nextQuestion());
        document.getElementById('submitBtn').addEventListener('click', () => this.submitExam());
        document.getElementById('reviewAnswers').addEventListener('click', () => this.showReview());
        document.getElementById('retakeExam').addEventListener('click', () => this.resetExam());
        document.getElementById('backToResult').addEventListener('click', () => this.showResult());
    }

    // กำหนดตัวแปร DOM elements
    initializeElements() {
        this.welcomeScreen = document.getElementById('welcomeScreen');
        this.examScreen = document.getElementById('examScreen');
        this.resultScreen = document.getElementById('resultScreen');
        this.reviewScreen = document.getElementById('reviewScreen');
        this.questionText = document.getElementById('questionText');
        this.choicesContainer = document.getElementById('choicesContainer');
        this.questionNumber = document.getElementById('questionNumber');
        this.questionCounter = document.getElementById('questionCounter');
        this.progressFill = document.getElementById('progressFill');
        this.timeRemaining = document.getElementById('timeRemaining');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.submitBtn = document.getElementById('submitBtn');
        this.questionGrid = document.getElementById('questionGrid');
    }

    // แสดงหน้าต้อนรับ
    showWelcomeScreen() {
        this.hideAllScreens();
        this.welcomeScreen.classList.add('active');
    }

    // เริ่มสอบ
    startExam() {
        this.isExamStarted = true;
        this.currentQuestionIndex = 0;
        this.userAnswers = {};
        this.timeRemaining = 60 * 60; // 60 นาที
        
        this.hideAllScreens();
        this.examScreen.classList.add('active');
        this.createQuestionGrid();
        this.displayQuestion();
        this.startTimer();
    }

    // ซ่อนหน้าจอทั้งหมด
    hideAllScreens() {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
    }

    // แสดงคำถาม
    displayQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        
        this.questionNumber.textContent = `ข้อที่ ${question.id}`;
        this.questionText.textContent = question.question;
        this.questionCounter.textContent = `ข้อ ${this.currentQuestionIndex + 1} จาก ${this.questions.length}`;
        
        // สร้างตัวเลือก
        this.choicesContainer.innerHTML = '';
        question.choices.forEach((choice, index) => {
            const choiceDiv = document.createElement('div');
            choiceDiv.className = 'choice';
            
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `question_${question.id}`;
            radio.value = index;
            radio.id = `choice_${question.id}_${index}`;
            
            // ตรวจสอบว่าเคยเลือกคำตอบนี้หรือไม่
            if (this.userAnswers[question.id] === index) {
                radio.checked = true;
                choiceDiv.classList.add('selected');
            }
            
            const label = document.createElement('label');
            label.htmlFor = radio.id;
            label.className = 'choice-text';
            label.textContent = `${String.fromCharCode(65 + index)}. ${choice}`;
            
            choiceDiv.appendChild(radio);
            choiceDiv.appendChild(label);
            
            // เพิ่ม event listener
            choiceDiv.addEventListener('click', () => {
                this.selectAnswer(question.id, index);
            });
            
            this.choicesContainer.appendChild(choiceDiv);
        });
        
        // อัปเดต navigation buttons
        this.prevBtn.disabled = this.currentQuestionIndex === 0;
        this.nextBtn.style.display = this.currentQuestionIndex === this.questions.length - 1 ? 'none' : 'inline-block';
        this.submitBtn.style.display = this.currentQuestionIndex === this.questions.length - 1 ? 'inline-block' : 'none';
        
        // อัปเดต progress bar
        const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        this.progressFill.style.width = `${progress}%`;
        
        // อัปเดต question grid
        this.updateQuestionGrid();
    }

    // เลือกคำตอบ
    selectAnswer(questionId, answerIndex) {
        this.userAnswers[questionId] = answerIndex;
        
        // อัปเดต UI
        document.querySelectorAll(`input[name="question_${questionId}"]`).forEach((radio, index) => {
            const choiceDiv = radio.closest('.choice');
            if (index === answerIndex) {
                radio.checked = true;
                choiceDiv.classList.add('selected');
            } else {
                choiceDiv.classList.remove('selected');
            }
        });
        
        this.updateQuestionGrid();
    }

    // คำถามถัดไป
    nextQuestion() {
        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.currentQuestionIndex++;
            this.displayQuestion();
        }
    }

    // คำถามก่อนหน้า
    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.displayQuestion();
        }
    }

    // สร้าง question grid
    createQuestionGrid() {
        this.questionGrid.innerHTML = '';
        this.questions.forEach((question, index) => {
            const gridItem = document.createElement('div');
            gridItem.className = 'grid-item';
            gridItem.textContent = question.id;
            gridItem.addEventListener('click', () => {
                this.currentQuestionIndex = index;
                this.displayQuestion();
            });
            this.questionGrid.appendChild(gridItem);
        });
    }

    // อัปเดต question grid
    updateQuestionGrid() {
        const gridItems = this.questionGrid.querySelectorAll('.grid-item');
        gridItems.forEach((item, index) => {
            item.className = 'grid-item';
            
            if (index === this.currentQuestionIndex) {
                item.classList.add('current');
            } else if (this.userAnswers[this.questions[index].id] !== undefined) {
                item.classList.add('answered');
            } else {
                item.classList.add('unanswered');
            }
        });
    }

    // เริ่ม timer
    startTimer() {
        this.timer = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();
            
            if (this.timeRemaining <= 0) {
                this.submitExam();
            }
        }, 1000);
    }

    // อัปเดต timer display
    updateTimerDisplay() {
        const minutes = Math.floor(this.timeRemaining / 60);
        const seconds = this.timeRemaining % 60;
        this.timeRemaining.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        // เปลี่ยนสีเมื่อเหลือเวลาน้อย
        if (this.timeRemaining <= 300) { // 5 นาที
            this.timeRemaining.style.color = '#dc3545';
            this.timeRemaining.style.animation = 'blink 1s infinite';
        }
    }

    // ส่งข้อสอบ
    submitExam() {
        if (this.timer) {
            clearInterval(this.timer);
        }
        
        // คำนวณคะแนน
        let correctAnswers = 0;
        this.questions.forEach(question => {
            if (this.userAnswers[question.id] === question.correctAnswer) {
                correctAnswers++;
            }
        });
        
        const percentage = Math.round((correctAnswers / this.questions.length) * 100);
        const isPassed = percentage >= 70;
        
        // บันทึกผลสอบ
        this.examResult = {
            correctAnswers,
            totalQuestions: this.questions.length,
            percentage,
            isPassed,
            answers: { ...this.userAnswers }
        };
        
        this.showResult();
    }

    // แสดงผลสอบ
    showResult() {
        this.hideAllScreens();
        this.resultScreen.classList.add('active');
        
        const result = this.examResult;
        document.getElementById('scorePercentage').textContent = `${result.percentage}%`;
        document.getElementById('correctAnswers').textContent = result.correctAnswers;
        document.getElementById('totalQuestions').textContent = result.totalQuestions;
        document.getElementById('percentage').textContent = result.percentage;
        
        const statusElement = document.getElementById('resultStatus');
        statusElement.textContent = result.isPassed ? 'ผ่าน' : 'ไม่ผ่าน';
        statusElement.className = `result-status ${result.isPassed ? 'pass' : 'fail'}`;
        
        // อัปเดต score circle color
        const scoreCircle = document.querySelector('.score-circle');
        if (result.isPassed) {
            scoreCircle.style.background = 'linear-gradient(45deg, #28a745, #20c997)';
        } else {
            scoreCircle.style.background = 'linear-gradient(45deg, #dc3545, #e74c3c)';
        }
    }

    // แสดงการทบทวน
    showReview() {
        this.hideAllScreens();
        this.reviewScreen.classList.add('active');
        
        const reviewContent = document.getElementById('reviewContent');
        reviewContent.innerHTML = '';
        
        this.questions.forEach(question => {
            const userAnswer = this.userAnswers[question.id];
            const isCorrect = userAnswer === question.correctAnswer;
            
            const reviewItem = document.createElement('div');
            reviewItem.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;
            
            reviewItem.innerHTML = `
                <div class="review-question">
                    ข้อที่ ${question.id}: ${question.question}
                </div>
                <div class="review-choices">
                    ${question.choices.map((choice, index) => {
                        let className = 'review-choice';
                        if (index === question.correctAnswer) {
                            className += ' correct-answer';
                        }
                        if (index === userAnswer) {
                            className += ` user-answer ${isCorrect ? '' : 'incorrect'}`;
                        }
                        return `<div class="${className}">${String.fromCharCode(65 + index)}. ${choice}</div>`;
                    }).join('')}
                </div>
                <div class="explanation">
                    <strong>คำอธิบาย:</strong> ${question.explanation}
                </div>
                <div class="answer-status">
                    <strong>คำตอบของคุณ:</strong> ${userAnswer !== undefined ? String.fromCharCode(65 + userAnswer) : 'ไม่ได้ตอบ'} 
                    <strong>คำตอบที่ถูก:</strong> ${String.fromCharCode(65 + question.correctAnswer)}
                    ${isCorrect ? '<span style="color: #28a745;">✓ ถูก</span>' : '<span style="color: #dc3545;">✗ ผิด</span>'}
                </div>
            `;
            
            reviewContent.appendChild(reviewItem);
        });
    }

    // แสดงโหมดทบทวน
    showReviewMode() {
        // สำหรับโหมดทบทวนโดยไม่ต้องสอบ
        this.examResult = {
            correctAnswers: 0,
            totalQuestions: this.questions.length,
            percentage: 0,
            isPassed: false,
            answers: {}
        };
        
        // ตั้งคำตอบทั้งหมดเป็นคำตอบที่ถูก (เพื่อแสดงในโหมดทบทวน)
        this.questions.forEach(question => {
            this.userAnswers[question.id] = question.correctAnswer;
        });
        
        this.showReview();
    }

    // รีเซ็ตการสอบ
    resetExam() {
        if (this.timer) {
            clearInterval(this.timer);
        }
        
        this.currentQuestionIndex = 0;
        this.userAnswers = {};
        this.timeRemaining = 60 * 60;
        this.isExamStarted = false;
        this.examResult = null;
        
        this.showWelcomeScreen();
    }
}

// เริ่มระบบเมื่อ DOM โหลดเสร็จ
document.addEventListener('DOMContentLoaded', () => {
    new ExamSystem();
});

// เพิ่ม CSS animation สำหรับ blink
const style = document.createElement('style');
style.textContent = `
    @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0.5; }
    }
`;
document.head.appendChild(style);