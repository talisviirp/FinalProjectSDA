// const products = [
//   {
//     id: 1,
//     title: "Watch One Leather",
//     brand: "Nikies",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=799&q=80",
//     images:
//     {
//       1: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=799&q=80",
//       2: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=799&q=80",
//       3: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//       4: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
//     },
//     arrival: "new",
//     category: "New"
//   },
//   {
//     id: 2,
//     title: "Red shuu",
//     brand: "Mikies",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     arrival: "old",
//     category: "New"
//   },
//   {
//     id: 3,
//     title: "Rayban Classic",
//     brand: "Pikates",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
//     arrival: "old",
//     category: "New"
//   },
//   {
//     id: 4,
//     title: "Kloss Lipstick Blood Red",
//     brand: "Asos",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80",
//     arrival: "new",
//     category: "New"
//   },
//   {
//     id: 5,
//     title: "Fancy Shoe Smart",
//     brand: "Tascos",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
//     arrival: "new",
//     category: "New"
//   },
//   {
//     id: 6,
//     title: "Arabica Organica 1kg",
//     brand: "Dummi",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     arrival: "new",
//     category: "New"
//   },
//   {
//     id: 7,
//     title: "Heels High Blue",
//     brand: "Happy Puppy",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
//     arrival: "new",
//     category: "New"
//   },
//   {
//     id: 8,
//     title: "Hike 5000",
//     brand: "Orange",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=428&q=80",
//     arrival: "new",
//     category: "New"
//   },
//   {
//     id: 9,
//     title: "Veke Smoothie",
//     brand: "Sandal",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     arrival: "new",
//     category: "New"
//   },
//   {
//     id: 10,
//     title: "Jenuin",
//     brand: "Mandal",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80",
//     arrival: "new",
//     category: "New"
//   },
//   {
//     id: 11,
//     title: "Maui",
//     brand: "Colony",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     arrival: "new",
//     category: "New"
//   },
//   {
//     id: 12,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
//     arrival: "new",
//     category: "New"
//   },
//   {
//     id: 13,
//     title: "Watch One Leather",
//     brand: "Nikies",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=799&q=80",
//     arrival: "new",
//     category: "New"
//   },
//   {
//     id: 14,
//     title: "Red shuu",
//     brand: "Mikies",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     arrival: "old",
//     category: "New"
//   },
//   {
//     id: 15,
//     title: "Rayban Classic",
//     brand: "Pikates",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
//     arrival: "old",
//     category: "New"
//   },
//   {
//     id: 16,
//     title: "Kloss Lipstick Blood Red",
//     brand: "Asos",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80",
//     arrival: "new",
//     category: "New"
//   },
//   {
//     id: 17,
//     title: "Fancy Shoe Smart",
//     brand: "Tascos",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
//     arrival: "new",
//     category: "New"
//   },
//   {
//     id: 18,
//     title: "Arabica Organica 1kg",
//     brand: "Dummi",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     arrival: "new",
//     category: "New"
//   },
//   {
//     id: 19,
//     title: "Heels High Blue",
//     brand: "Happy Puppy",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
//     arrival: "new",
//     category: "New"
//   },
//   {
//     id: 20,
//     title: "Hike 5000",
//     brand: "Orange",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=428&q=80",
//     arrival: "new",
//     category: "New"
//   },
//   {
//     id: 21,
//     title: "Veke Smoothie",
//     brand: "Sandal",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     arrival: "new",
//     category: "New"
//   },
//   {
//     id: 22,
//     title: "Jenuin",
//     brand: "Mandal",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80",
//     arrival: "new",
//     category: "New"
//   },
//   {
//     id: 23,
//     title: "Maui",
//     brand: "Colony",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     arrival: "new",
//     category: "New"
//   },
//   {
//     id: 24,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
//     arrival: "new",
//     category: "New"
//   },
//   {
//     id: 25,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=719&q=80",
//     arrival: "new",
//     category: "Home Decor"
//   },
//   {
//     id: 26,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
//     arrival: "new",
//     category: "Home Decor"
//   },
//   {
//     id: 27,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1511389026070-a14ae610a1be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     arrival: "new",
//     category: "Home Decor"
//   },
//   {
//     id: 28,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     arrival: "new",
//     category: "Home Decor"
//   },
//   {
//     id: 29,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80",
//     arrival: "new",
//     category: "Home Decor"
//   },
//   {
//     id: 30,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
//     arrival: "new",
//     category: "Home Decor"
//   },
//   {
//     id: 31,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     arrival: "new",
//     category: "Home Decor"
//   },
//   {
//     id: 32,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1615874694520-474822394e73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
//     arrival: "new",
//     category: "Home Decor"
//   },
//   {
//     id: 33,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     arrival: "new",
//     category: "Home Decor"
//   },
//   {
//     id: 34,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
//     arrival: "new",
//     category: "Home Decor"
//   },
//   {
//     id: 35,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1615873968403-89e068629265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
//     arrival: "new",
//     category: "Home Decor"
//   },
//   {
//     id: 36,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1616137303871-05ce745f9cdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
//     arrival: "new",
//     category: "Home Decor"
//   },
//   {
//     id: 37,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1615891618972-799500c621b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
//     arrival: "new",
//     category: "Home Decor"
//   },
//   {
//     id: 38,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1617806265182-7b3f847f0b75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
//     arrival: "new",
//     category: "Home Decor"
//   },
//   {
//     id: 39,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1584473457406-6240486418e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     arrival: "new",
//     category: "Food & Drink"
//   },
//   {
//     id: 40,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1587790032594-babe1292cede?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=719&q=80",
//     arrival: "new",
//     category: "Food & Drink"
//   },
//   {
//     id: 41,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     arrival: "new",
//     category: "Food & Drink"
//   },
//   {
//     id: 42,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1522643628976-0a170f6722ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     arrival: "new",
//     category: "Food & Drink"
//   },
//   {
//     id: 43,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1608611517968-1b453a0b11e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     arrival: "new",
//     category: "Food & Drink"
//   },
//   {
//     id: 44,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1608317873211-de6cf0f40fec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=697&q=80",
//     arrival: "new",
//     category: "Food & Drink"
//   },
//   {
//     id: 45,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1600615789368-e54db9aced0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     arrival: "new",
//     category: "Food & Drink"
//   },
//   {
//     id: 46,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
//     arrival: "new",
//     category: "Food & Drink"
//   },
//   {
//     id: 47,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1525904097878-94fb15835963?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     arrival: "new",
//     category: "Food & Drink"
//   },
//   {
//     id: 48,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1521488674203-62bf581664be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
//     arrival: "new",
//     category: "Food & Drink"
//   },
//   {
//     id: 49,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1616590285617-a15b96b6fcf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80",
//     arrival: "new",
//     category: "Food & Drink"
//   },
//   {
//     id: 50,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1628200518429-12cc0e2a0612?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
//     arrival: "new",
//     category: "Food & Drink"
//   },
//   {
//     id: 51,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1530914547840-346c183410de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     arrival: "new",
//     category: "Food & Drink"
//   },
//   {
//     id: 52,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1628200472485-178afb2a53b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
//     arrival: "new",
//     category: "Food & Drink"
//   },
//   {
//     id: 53,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1556227834-09f1de7a7d14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     arrival: "new",
//     category: "Women"
//   },
//   {
//     id: 54,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
//     arrival: "new",
//     category: "Women"
//   },
//   {
//     id: 55,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
//     arrival: "new",
//     category: "Women"
//   },
//   {
//     id: 56,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=711&q=80",
//     arrival: "new",
//     category: "Women"
//   },
//   {
//     id: 57,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1552664199-fd31f7431a55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     arrival: "new",
//     category: "Women"
//   },
//   {
//     id: 58,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80",
//     arrival: "new",
//     category: "Women"
//   },
//   {
//     id: 59,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1571867424485-369464ed33cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     arrival: "new",
//     category: "Women"
//   },
//   {
//     id: 60,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1556227834-09f1de7a7d14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     arrival: "new",
//     category: "Women"
//   },
//   {
//     id: 61,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
//     arrival: "new",
//     category: "Women"
//   },
//   {
//     id: 62,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
//     arrival: "new",
//     category: "Women"
//   },
//   {
//     id: 63,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=711&q=80",
//     arrival: "new",
//     category: "Women"
//   },
//   {
//     id: 64,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1552664199-fd31f7431a55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     arrival: "new",
//     category: "Women"
//   },
//   {
//     id: 65,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80",
//     arrival: "new",
//     category: "Women"
//   },
//   {
//     id: 66,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1571867424485-369464ed33cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     arrival: "new",
//     category: "Women"
//   },
//   {
//     id: 67,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
//     arrival: "new",
//     category: "Beauty & Wellness"
//   },
//   {
//     id: 68,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     arrival: "new",
//     category: "Beauty & Wellness"
//   },
//   {
//     id: 69,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=887&q=80",
//     arrival: "new",
//     category: "Beauty & Wellness"
//   },
//   {
//     id: 70,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1627483262112-039e9a0a0f16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     arrival: "new",
//     category: "Beauty & Wellness"
//   },
//   {
//     id: 71,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1459664018906-085c36f472af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     arrival: "new",
//     category: "Beauty & Wellness"
//   },
//   {
//     id: 72,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1483137140003-ae073b395549?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     arrival: "new",
//     category: "Beauty & Wellness"
//   },
//   {
//     id: 73,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1458501534264-7d326fa0ca04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     arrival: "new",
//     category: "Beauty & Wellness"
//   },
//   {
//     id: 74,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
//     arrival: "new",
//     category: "Beauty & Wellness"
//   },
//   {
//     id: 75,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     arrival: "new",
//     category: "Beauty & Wellness"
//   },
//   {
//     id: 76,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=887&q=80",
//     arrival: "new",
//     category: "Beauty & Wellness"
//   },
//   {
//     id: 77,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1627483262112-039e9a0a0f16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     arrival: "new",
//     category: "Beauty & Wellness"
//   },
//   {
//     id: 78,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1459664018906-085c36f472af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     arrival: "new",
//     category: "Beauty & Wellness"
//   },
//   {
//     id: 79,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1483137140003-ae073b395549?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     arrival: "new",
//     category: "Beauty & Wellness"
//   },
//   {
//     id: 80,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1458501534264-7d326fa0ca04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     arrival: "new",
//     category: "Beauty & Wellness"
//   },
//   {
//     id: 81,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1561828995-aa79a2db86dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
//     arrival: "new",
//     category: "Jewelry"
//   },
//   {
//     id: 82,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1599459183200-59c7687a0275?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80",
//     arrival: "new",
//     category: "Jewelry"
//   },
//   {
//     id: 83,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     arrival: "new",
//     category: "Jewelry"
//   },
//   {
//     id: 84,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
//     arrival: "new",
//     category: "Jewelry"
//   },
//   {
//     id: 85,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1600721391689-2564bb8055de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=706&q=80",
//     arrival: "new",
//     category: "Jewelry"
//   },
//   {
//     id: 86,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     arrival: "new",
//     category: "Jewelry"
//   },
//   {
//     id: 87,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     arrival: "new",
//     category: "Jewelry"
//   },
//   {
//     id: 88,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1561828995-aa79a2db86dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
//     arrival: "new",
//     category: "Jewelry"
//   },
//   {
//     id: 89,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1599459183200-59c7687a0275?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80",
//     arrival: "new",
//     category: "Jewelry"
//   },
//   {
//     id: 90,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     arrival: "new",
//     category: "Jewelry"
//   },
//   {
//     id: 91,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
//     arrival: "new",
//     category: "Jewelry"
//   },
//   {
//     id: 92,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1600721391689-2564bb8055de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=706&q=80",
//     arrival: "new",
//     category: "Jewelry"
//   },
//   {
//     id: 93,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     arrival: "new",
//     category: "Jewelry"
//   },
//   {
//     id: 94,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     arrival: "new",
//     category: "Jewelry"
//   },
//   {
//     id: 95,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1595204930135-f9d0e62644dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80",
//     arrival: "new",
//     category: "Paper & Novelty"
//   },
//   {
//     id: 96,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=704&q=80",
//     arrival: "new",
//     category: "Paper & Novelty"
//   },
//   {
//     id: 97,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1532153955177-f59af40d6472?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     arrival: "new",
//     category: "Paper & Novelty"
//   },
//   {
//     id: 98,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1527769929977-c341ee9f2033?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     arrival: "new",
//     category: "Paper & Novelty"
//   },
//   {
//     id: 99,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1510193806518-f731c70a35bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     arrival: "new",
//     category: "Paper & Novelty"
//   },
//   {
//     id: 100,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
//     arrival: "new",
//     category: "Paper & Novelty"
//   },
//   {
//     id: 101,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     arrival: "new",
//     category: "Paper & Novelty"
//   },
//   {
//     id: 102,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1595204930135-f9d0e62644dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80",
//     arrival: "new",
//     category: "Paper & Novelty"
//   },
//   {
//     id: 103,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=704&q=80",
//     arrival: "new",
//     category: "Paper & Novelty"
//   },
//   {
//     id: 104,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1532153955177-f59af40d6472?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     arrival: "new",
//     category: "Paper & Novelty"
//   },
//   {
//     id: 105,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1527769929977-c341ee9f2033?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     arrival: "new",
//     category: "Paper & Novelty"
//   },
//   {
//     id: 106,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1510193806518-f731c70a35bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     arrival: "new",
//     category: "Paper & Novelty"
//   },
//   {
//     id: 107,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
//     arrival: "new",
//     category: "Paper & Novelty"
//   },
//   {
//     id: 108,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     arrival: "new",
//     category: "Paper & Novelty"
//   },
//   {
//     id: 109,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     arrival: "new",
//     category: "Kids & Baby"
//   },
//   {
//     id: 110,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     arrival: "new",
//     category: "Kids & Baby"
//   },
//   {
//     id: 111,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     arrival: "new",
//     category: "Kids & Baby"
//   },
//   {
//     id: 112,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     arrival: "new",
//     category: "Kids & Baby"
//   },
//   {
//     id: 113,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     arrival: "new",
//     category: "Kids & Baby"
//   },
//   {
//     id: 114,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     arrival: "new",
//     category: "Kids & Baby"
//   },
//   {
//     id: 115,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     arrival: "new",
//     category: "Kids & Baby"
//   },
//   {
//     id: 116,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     arrival: "new",
//     category: "Kids & Baby"
//   },
//   {
//     id: 117,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     arrival: "new",
//     category: "Kids & Baby"
//   },
//   {
//     id: 118,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     arrival: "new",
//     category: "Kids & Baby"
//   },
//   {
//     id: 119,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     arrival: "new",
//     category: "Kids & Baby"
//   },
//   {
//     id: 120,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     arrival: "new",
//     category: "Kids & Baby"
//   },
//   {
//     id: 121,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     arrival: "new",
//     category: "Kids & Baby"
//   },
//   {
//     id: 122,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     arrival: "new",
//     category: "Kids & Baby"
//   },
//   {
//     id: 123,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1504595403659-9088ce801e29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     arrival: "new",
//     category: "Pets"
//   },
//   {
//     id: 124,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
//     arrival: "new",
//     category: "Pets"
//   },
//   {
//     id: 125,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
//     arrival: "new",
//     category: "Pets"
//   },
//   {
//     id: 126,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1504595403659-9088ce801e29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     arrival: "new",
//     category: "Pets"
//   },
//   {
//     id: 127,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
//     arrival: "new",
//     category: "Pets"
//   },
//   {
//     id: 128,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
//     arrival: "new",
//     category: "Pets"
//   },
//   {
//     id: 129,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
//     arrival: "new",
//     category: "Pets"
//   },
//   {
//     id: 130,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1504595403659-9088ce801e29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     arrival: "new",
//     category: "Pets"
//   },
//   {
//     id: 131,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
//     arrival: "new",
//     category: "Pets"
//   },
//   {
//     id: 132,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
//     arrival: "new",
//     category: "Pets"
//   },
//   {
//     id: 133,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1504595403659-9088ce801e29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     arrival: "new",
//     category: "Pets"
//   },
//   {
//     id: 134,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
//     arrival: "new",
//     category: "Pets"
//   },
//   {
//     id: 135,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
//     arrival: "new",
//     category: "Pets"
//   },
//   {
//     id: 136,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
//     arrival: "new",
//     category: "Pets"
//   },
//   {
//     id: 137,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1577466803092-390dead202bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     arrival: "new",
//     category: "Men"
//   },
//   {
//     id: 138,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1577466803092-390dead202bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     arrival: "new",
//     category: "Men"
//   },
//   {
//     id: 139,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1577466803092-390dead202bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     arrival: "new",
//     category: "Men"
//   },
//   {
//     id: 140,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1577466803092-390dead202bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     arrival: "new",
//     category: "Men"
//   },
//   {
//     id: 141,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1577466803092-390dead202bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     arrival: "new",
//     category: "Men"
//   },
//   {
//     id: 142,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1577466803092-390dead202bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     arrival: "new",
//     category: "Men"
//   },
//   {
//     id: 143,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1577466803092-390dead202bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     arrival: "new",
//     category: "Men"
//   },
//   {
//     id: 144,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1577466803092-390dead202bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     arrival: "new",
//     category: "Men"
//   },
//   {
//     id: 145,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1577466803092-390dead202bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     arrival: "new",
//     category: "Men"
//   },
//   {
//     id: 146,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1577466803092-390dead202bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     arrival: "new",
//     category: "Men"
//   },
//   {
//     id: 147,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1577466803092-390dead202bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     arrival: "new",
//     category: "Men"
//   },
//   {
//     id: 148,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1577466803092-390dead202bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     arrival: "new",
//     category: "Men"
//   },
//   {
//     id: 149,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1577466803092-390dead202bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     arrival: "new",
//     category: "Men"
//   },
//   {
//     id: 150,
//     title: "Air-mini 2",
//     brand: "Hartz",
//     price: 500,
//     description: "Best product in the world! Made in Estonia. 100% leather.",
//     coverImg: "https://images.unsplash.com/photo-1577466803092-390dead202bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     arrival: "new",
//     category: "Men"
//   }


// ]
// export {
//   products
// }

