const STORE_DATA = [
    {
        title: "laptops",
        items: [
            {
                id: 1,
                name: "Dell Latitude",
                imageURL: "https://m.media-amazon.com/images/I/418cc1MvF1L._SL1280_.jpg ",
                price: "16999"

            },
            {
                id: 2,
                name: "Hp Compaq 620",
                imageURL: "https://m.media-amazon.com/images/I/51Z5zICcWrL._SX679_.jpg",
                price: "10500"

            },
            {
                id: 3,
                name: "Lenovo",
                imageURL: "https://m.media-amazon.com/images/I/41Eb4yFX38L._SY300_SX300_QL70_FMwebp_.jpg",
                price: "12000"

            },
            {
                id: 4,
                name: "Lenovo ThinkPad",
                imageURL: "https://m.media-amazon.com/images/I/51QRczGFeYL._SX679_.jpg",
                price: "22000"

            },
            {
                id: 5,
                name: "Macbook Air",
                imageURL: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1683555932/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256712_0_jlaiwi.png/mxw_2048,f_auto",
                price: "35000"

            },
            {
                id: 6,
                name: "Acer Aspire 5",
                imageURL: "https://www.reliancedigital.in/medias/Acer-15-Aspire3-R3-Laptop-492849812-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1NzA0NzV8aW1hZ2UvanBlZ3xpbWFnZXMvaDIxL2g3NS85ODQxMjI3MzAwODk0LmpwZ3xmZWFjMjg5NzlhMTY5OTZmNDZkYTczZjlmNWY1YmY5YTRhMDVjN2RiZjhiYmM1YTNjNWI1N2QzNmMyNjRlZWYz",
                price: "26000"

            },
            {
                id: 7,
                name: "Vostro 3510 Laptop",
                imageURL: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/vostro-notebooks/15-3510/media-gallery/archive/dv3510nt_cnb_05000ff090_gy.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=606&qlt=100,1&resMode=sharp2&size=606,402&chrss=full",
                price: "56000"

            },
            {
                id: 8,
                name: "Galaxy Book2 Pro",
                imageURL: "https://images.samsung.com/is/image/samsung/p6pim/in/np930xed-kb3in/gallery/in-galaxy-book2-pro-13inch-np930xeda-np930xed-kb3in-531252262?imwidth=480",
                price: "98990"

            },
            {
                id: 9,
                name: "Asus Vivobook Ryzen 5 ",
                imageURL: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664425037/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256967_0_c0izmj.png/mxw_2048,f_auto",
                price: "54990"

            },
            {
                id: 10,
                name: "Lenovo IdeaPad D330",
                imageURL: "https://m.media-amazon.com/images/I/51gkDWHPvQL._SL1067_.jpg",
                price: "20990"

            },
        ],
    },
    {
        title: "Keyboard and mouse",
        items: [
            {
                id: 1,
                name: "Zebronics ZEB-KM2100 Multimedia USB Keyboard ",
                imageURL: "https://m.media-amazon.com/images/I/81shebPwe0L._SL1500_.jpg",
                price: "350"

            },
            {
                id: 2,
                name: "Dell Kb216 Wired Multimedia USB Keyboard with Super Quite Plunger Keys with Spill-Resistant Black",
                imageURL: "https://m.media-amazon.com/images/I/811YM2Go9GL._SL1500_.jpg",
                price: "1200"

            },
            {
                id: 3,
                name: "HP K300 Backlit Membrane Wired Gaming Keyboard with Mixed Color Lighting, 4 LED Indicators, Matte Finish Double Injection Key Caps and Windows Lock Key / 3 Years Warranty(4QM95AA)",
                imageURL: "https://m.media-amazon.com/images/I/71fHypDvRML._SL1500_.jpg",
                price: "1500"

            },
            {
                id: 4,
                name: "Evo Fox Warhammer Gaming Keyboard with Breathing Effects LED Backlit, Floating Keycaps, 19 Anti Ghosting Keys and Windows Lock Key",
                imageURL: "https://m.media-amazon.com/images/I/61FE8AtBxPL._SL1500_.jpg",
                price: "1700"

            },
            {
                id: 5,
                name: "Amazon Basics Wired Gaming Keyboard and Mouse Combo | Multicolor RGB LED Backlight Effects, Multimedia Keys, Durable Aluminum Body",
                imageURL: "https://m.media-amazon.com/images/I/71QFAQCR6uL._SL1500_.jpg",
                price: "1800"

            },
            {
                id: 6,
                name: "Zebronics JUDWAA 541 USB Keyboard and Mouse Set for Computers & Laptops with 1200 DPI, 1.3 Meter Cable, Retractable Stand, Comfortable Usage, Silent Typing and Matte Finish (Red)",
                imageURL: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/24e818b6-7f1a-4066-9526-ae8e735ea34e.__CR0,0,970,600_PT0_SX970_V1___.jpg",
                price: "1500"

            },
            {
                id: 7,
                name: "Enter Rainbow Back Light Gaming Keyboard and Mouse Combo MT-C510 with Unit-Ghosting Keys, Colorful Rainbow Back Light",
                imageURL: "https://m.media-amazon.com/images/I/81TPOoH6kcL._SL1280_.jpg",
                price: "1100"

            },
            {
                id: 8,
                name: "Redgear Blaze Semi-Mechanical wired Gaming keyboard with 3 colour backlit, full aluminium body & Windows key lock for PC ( Black )",
                imageURL: "https://m.media-amazon.com/images/I/61M2CPqMgwL._SL1000_.jpg",
                price: "1000"

            }
        ],
    }, {
        title: "SSD & Hard Drive",
        items: [
            {
                id: 1,
                name: "Corsair MP600 PRO NH 1TB PCIe Gen4 x4 NVMe M.2 SSD – 3D TLC NAND – M.2 2280 – Direct Storage Compatible- Up to 7000MB/s & 5700MB/s Sequential Read/Write Speed - No Heatsink - CSSD-F1000GBMP600PNH",
                imageURL: "https://m.media-amazon.com/images/I/71BbE6mC83L._SL1500_.jpg",
                price: "46000"

            },
            {
                id: 2,
                name: "Kingston SSDNow A400 480GB Internal Solid State Drive (SA400S37/480GIN)",
                imageURL: "https://m.media-amazon.com/images/I/71v2CC1y-SL._SL1500_.jpg",
                price: "1600"

            },
            {
                id: 3,
                name: "WD Green",
                imageURL: "https://m.media-amazon.com/images/I/418cc1MvF1L._SL1280_.jpg ",
                price: "700"

            },
            {
                id: 4,
                name: "ADATA Ultimate SU650 3D NAND 240 GB SSD - su650",
                imageURL: "https://m.media-amazon.com/images/I/81Y-vyMxLbL._SL1500_.jpg",
                price: "1500"

            },
            {
                id: 5,
                name: "Samsung 1tb SSD",
                imageURL: "https://m.media-amazon.com/images/I/91n044oeDZL._SL1500_.jpg",
                price: "8600"

            },
            {
                id: 6,
                name: "Consistent SSD 256GB (CTSSD256S6)",
                imageURL: "https://m.media-amazon.com/images/I/418cc1MvF1L._SL1280_.jpg ",
                price: "1040"

            },
            {
                id: 7,
                name: "EVM 256GB M.2 SATA SSD   ",
                imageURL: "https://www.onlyssd.com/wp-content/uploads/2022/06/EVM-256GB-M.2-SATA-SSD-EVMM2-256GB.jpg",
                price: "1200"

            },
        ]

    }, {
        title: "Monitors",
        items: [
            {
                id: 1,
                name: "Lenovo Q-Series 24 Inch (60.5Cm) 1920x1080 Pixels FHD IPS Monitor | Height Adjustment, 2X3W Speakers, 75Hz, AMD FreeSync, HDMI, DP, Smart Display Customization, Raven Black",
                imageURL: "https://m.media-amazon.com/images/I/71r07rY2wcL._SL1500_.jpg",
                price: "12490"
            },
            {
                id: 2,
                name: "Samsung 24-inch (60.46cm) 1920 X 1080 Pixels FHD Monitor, IPS, 75 Hz, Bezel Less Design, AMD FreeSync, Flicker Free, HDMI, D-sub, (LF24T350FHWXXL, Dark Blue Gray)",
                imageURL: "https://m.media-amazon.com/images/I/81TjRLHaz1L._SL1500_.jpg",
                price: "9400"
            },
            {
                id: 3,
                name: "ZEBRONICS AC32FHD LED Curved 75Hz 80Cm 32 81.28 Cm 1920x1080 Pixels FHD Resolution Monitor with HDMI + VGA Dual Input Built-in Speaker, Max 250 Nits Brightness, Black",
                imageURL: "https://m.media-amazon.com/images/I/813Y1TIZwfL._SL1500_.jpg",
                price: "12999"
            },
            {
                id: 4,
                name: "Acer HA270 27 Inch (68.58 Cm) 1920 X 1080 Pixels, Full HD IPS LCD Monitor with LED Back Light Technology I Ultra Slim, 6.6mm Thick Frameless Design AMD Free Sync Monitor (White)",
                imageURL: "https://m.media-amazon.com/images/I/71wRe7xkcSL._SL1246_.jpg",
                price: "11500"
            },
            {
                id: 5,
                name: "LG 27Ml600 Full Hd 27 Inch (69 Cm) LCD 1920 X 1080 Pixels IPS Monitor 3 Side Borderless Design - Dual Hdmi & Vga Port - Reader Mode and Flicker Free Screen (Work & Education) - (White)",
                imageURL: "https://m.media-amazon.com/images/I/716jANr8jHL._SL1500_.jpg",
                price: "14299"
            },
            {
                id: 6,
                name: "OnePlus 24 inch Full HD LCD Monitor LED Backlit IPS Panel with 3-Side Bezel Less, USB Type-C connectivity with 18W Charging,8 mm Slim, Flicker Free Monitor (Response Time: 5 ms, 75 Hz Refresh Rate)",
                imageURL: "https://m.media-amazon.com/images/I/61MDBcEcToL._SL1500_.jpg",
                price: "12300"
            },
        ]
    }, {
        title: "Graphic Cards",
        items: [
            {
                id: 1,
                name: "Sapphire AMD Radeon RX 6700 gddr6 pci_e_x16 Graphic Card with 10 GB GDDR6, AMD RDNA",
                imageURL: "https://m.media-amazon.com/images/I/81cnYWxVzIL._SL1500_.jpg",
                price: "33000"
            },
            {
                id: 2,
                name: "ZOTAC Gaming GeForce RTX 3060 Twin Edge 12GB GDDR6 192-bit 15 Gbps 4.0 Gaming Graphics Card, IceStorm 2.0 Cooling, Active Fan Control, Freeze Fan Stop, ZT-A30600E-10M,pci_e,gddr6",
                imageURL: "https://m.media-amazon.com/images/I/616US2sE7wL._SL1280_.jpg",
                price: "35000"
            },
            {
                id: 3,
                name: "MSI GeForce GTX 1650 D6 Ventus XS OCV1 4 GB GDDR6 128 bit PCI Express x16 3.0 Gaming Graphic Card, pci_e",
                imageURL: "https://m.media-amazon.com/images/I/71TfPNs4A2L._SL1500_.jpg",
                price: "14843"
            },
            {
                id: 4,
                name: "Sapphire Pulse AMD Radeon RX 6800 XT Graphic Card with 16 GB GDDR6, AMD RDNA 2, pci_e_x16",
                imageURL: "https://m.media-amazon.com/images/I/81EkCyIHlJL._SL1500_.jpg",
                price: "99999"
            },
            {
                id: 5,
                name: "MSI GeForce RTX 4090 Gaming X Trio 24G Graphic Card I NVIDIA GeForce RTX 4090 GPU | 24 GB GDDR6X 384-bit Memory, | 21 Gbps Speed | PCI Express 4 Interface | Upto 2610 MHz | TORX Fan 5.0, Tri FROZR 3",
                imageURL: "https://m.media-amazon.com/images/I/71hdRXexOeL._SL1500_.jpg",
                price: "200000"
            },
        ]
    }

];



export default STORE_DATA;