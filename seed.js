const db = require('./server/db/db')
const User = require('./server/db/models/index').User
const Clothing = require('./server/db/models/index').Clothing
// const Type = require(db).Type

const users = [
  {
    id: 1, email: 'nicole@assemble.com', password: 'assemble'
  }
]

const clothings = [
  { //flannel button down shirt
    id: 1, category: 'top', color: ['blue', 'black'], setting: ['casual'], weather: ['cold'], imageUrl: 'https://i.pinimg.com/736x/fa/a8/56/faa856f24f273e4574072c0beaae9a97--blue-flannel-shirt-tartan-shirt.jpg'
  },
  { // peplum top
    id: 2, category: 'top', color: ['red'], setting: ['work', 'going out'], weather: ['warm', 'hot'], imageUrl: 'https://i.pinimg.com/originals/92/6b/56/926b56eab860d5be39405920f15529a9.jpg'
  },
  { // stripe sleeve crop top
    id: 3, category: 'top', color: ['black', 'white'], setting: ['casual'], weather: ['warm', 'hot'], imageUrl: 'https://i.pinimg.com/736x/89/0b/57/890b57dca0a3a740948af4517c5f399f--black-crop-tops-tops-crop.jpg'
  },
  { // flowy half button down
    id: 4, category: 'top', color: ['green'], setting: ['work', 'casual'], weather: ['cold', 'warm'], imageUrl: 'https://i.pinimg.com/736x/20/f6/93/20f6938e69885bcd95a6fc499ec45c62--green-blouse-green-shirt.jpg'
  },
  { // bow dress
    id: 5, category: 'full body', color: ['grey', 'black'], setting: ['work'], weather: ['warm', 'hot'], imageUrl: 'http://www.stories.com/Content/ProductContent/0201731001/0201731001_2_100011.jpg'
  },
  { // long cinch waist dress
    id: 6, category: 'full body', color: ['maroon'], setting: ['going out'], weather: ['warm', 'hot'], imageUrl: 'https://img1.etsystatic.com/135/2/9883262/il_fullxfull.871365989_oh73.jpg'
  },
  { // black cropped pants
    id: 7, category: 'bottom', color: ['black'], setting: ['work'], weather: ['cold', 'warm', 'hot'], imageUrl: 'https://i.pinimg.com/736x/2f/98/5a/2f985a9785de96131f4375c981148912--black-cropped-trousers-black-crop-pants.jpg'
  },
  { // medium wash skinny jeans
    id: 8, category: 'bottom', color: ['blue'], setting: ['casual'], weather: ['cold', 'warm', 'hot'], imageUrl: 'http://lp.hm.com/hmprod?set=key[source],value[/model/2016/D00%200399136%20004%2097%204998.jpg]&set=key[rotate],value[]&set=key[width],value[]&set=key[height],value[]&set=key[x],value[]&set=key[y],value[]&set=key[type],value[STILL_LIFE_FRONT]&set=key[hmver],value[1]&set=key[quality],value[80]&set=key[size],value[346x405]&call=url[file:/mobile/v2/product]'
  },
  { // medium wash daisy denim shorts
    id: 9, category: 'bottom', color: ['blue'], setting: ['casual'], weather: ['warm', 'hot'], imageUrl: 'https://i.pinimg.com/736x/55/51/ab/5551ab19d521ea5bae6434142a06961c--denim-cutoffs-jeans-shorts.jpg'
  }
]

const seed = async () => {
  for(const user of users) {
    await User.create(user)
  }
  
  for(const clothing of clothings) {
    const clothingInstance = await Clothing.create(clothing)
    await clothingInstance.setUser(1)
  }
}

const main = () => {
  console.log('Syncing db...');
  db.sync({force: true})
    .then(() => {
      console.log('Seeding database...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      console.log('Successfully seeded database')
      db.close();
      return null;
    });
 };
 
 main();