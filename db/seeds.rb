
User.create( 
  first_name: 'Holy',
  last_name: 'Moly',
  email: 'test@test.com',
  password: password,
)

User.create( 
  first_name: 'Yolo',
  last_name: 'Solo',
  email: 'test2@test.com',
  password: password,
)

User.create( 
  first_name: 'Holy',
  last_name: 'Moly',
  email: 'test2@test.com',
  password: password,
)


User.create( 
  first_name: 'Polo',
  last_name: 'Rolo',
  email: 'test3@test.com',
  password: password,
)

Organization.create(
  name: 'Humane Society of Sandy',
  contact_phone: '801-223-1234',
  contact_email: 'humane@email.com',
  Zipcode: '84091')


Pet.create(
  breed: 'German Shepherd',
  neutered: true ,
  species: 'dog',
  age: '4',
  image: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/01/12201051/cute-puppy-body-image.jpg',
  size: 'medium',
  sex: 'female',
  organization_id: 1,
    )
Pet.create(
  breed: 'tabby',
  neutered: true ,
  species: 'cat',
  age: '7',
  image: 'https://www.catster.com/wp-content/uploads/2017/11/Mackerel-Tabby-cat.jpg',
  size: 'small',
  sex: 'female',
  organization_id: 1,
    )

Pet.create(
  breed: 'German Shepherd',
  neutered: true ,
  species: 'dog',
  age: '4',
  image: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/01/12201051/cute-puppy-body-image.jpg',
  size: 'medium',
  sex: 'female',
  organization_id: 1,
    )
Pet.create(
  breed: 'european',
  neutered: true ,
  species: 'goat',
  age: '10',
  image: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_843,w_1500,x_0,y_10/f_auto,q_auto,w_1100/v1555172614/shape/mentalfloss/iStock-177369626_1.jpg',
  size: 'large',
  sex: 'female',
  organization_id: 1,
    )

Pet.create(
  breed: 'plymouth rock',
  neutered: false ,
  species: 'chicken',
  age: '5',
  image: 'https://s3-us-west-2.amazonaws.com/hobbyfarms.com/wp-content/uploads/2019/03/19205250/plymouth-rock-rooster-77907370-600x347.jpg',
  size: 'small',
  sex: 'female',
  organization_id: 1,
    )


Organization.create(
  name: 'Humane Society of Salt Lake City',
  contact_phone: '801-123-5231',
  contact_email: 'humaneSLC@email.com',
  Zipcode: '84098')

Pet.create(
  breed: 'German Shepherd',
  neutered: true ,
  species: 'dog',
  age: '4',
  image: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/01/12201051/cute-puppy-body-image.jpg',
  size: 'medium',
  sex: 'female',
  organization_id: 2,
    )
Pet.create(
  breed: 'tabby',
  neutered: true ,
  species: 'cat',
  age: '7',
  image: 'https://www.catster.com/wp-content/uploads/2017/11/Mackerel-Tabby-cat.jpg',
  size: 'small',
  sex: 'female',
  organization_id: 2,
    )

Pet.create(
  breed: 'German Shepherd',
  neutered: true ,
  species: 'dog',
  age: '4',
  image: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/01/12201051/cute-puppy-body-image.jpg',
  size: 'medium',
  sex: 'female',
  organization_id: 2,
    )
Pet.create(
  breed: 'european',
  neutered: true ,
  species: 'goat',
  age: '10',
  image: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_843,w_1500,x_0,y_10/f_auto,q_auto,w_1100/v1555172614/shape/mentalfloss/iStock-177369626_1.jpg',
  size: 'large',
  sex: 'female',
  organization_id: 2,
    )

Pet.create(
  breed: 'plymouth rock',
  neutered: false ,
  species: 'chicken',
  age: '5',
  image: 'https://s3-us-west-2.amazonaws.com/hobbyfarms.com/wp-content/uploads/2019/03/19205250/plymouth-rock-rooster-77907370-600x347.jpg',
  size: 'small',
  sex: 'female',
  organization_id: 2,
    )

Organization.create(
  name: 'Daras Pet Rescue,
  contact_phone: '801-512-8521',
  contact_email: 'DPetRescue@email.com',
  Zipcode: '84012')

Pet.create(
  breed: 'German Shepherd',
  neutered: true ,
  species: 'dog',
  age: '4',
  image: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/01/12201051/cute-puppy-body-image.jpg',
  size: 'medium',
  sex: 'female',
  organization_id: 3,
    )
Pet.create(
  breed: 'tabby',
  neutered: true ,
  species: 'cat',
  age: '7',
  image: 'https://www.catster.com/wp-content/uploads/2017/11/Mackerel-Tabby-cat.jpg',
  size: 'small',
  sex: 'female',
  organization_id: 3,
    )

Pet.create(
  breed: 'German Shepherd',
  neutered: true ,
  species: 'dog',
  age: '4',
  image: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/01/12201051/cute-puppy-body-image.jpg',
  size: 'medium',
  sex: 'female',
  organization_id: 3,
    )
Pet.create(
  breed: 'european',
  neutered: true ,
  species: 'goat',
  age: '10',
  image: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_843,w_1500,x_0,y_10/f_auto,q_auto,w_1100/v1555172614/shape/mentalfloss/iStock-177369626_1.jpg',
  size: 'large',
  sex: 'female',
  organization_id: 3,
    )

Pet.create(
  breed: 'plymouth rock',
  neutered: false ,
  species: 'chicken',
  age: '5',
  image: 'https://s3-us-west-2.amazonaws.com/hobbyfarms.com/wp-content/uploads/2019/03/19205250/plymouth-rock-rooster-77907370-600x347.jpg',
  size: 'small',
  sex: 'female',
  organization_id: 3,
    )

puts "file is seeded"