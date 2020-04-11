class CreatePets < ActiveRecord::Migration[6.0]
  def change
    create_table :pets do |t|
      t.string :breed
      t.boolean :neutered
      t.string :species
      t.integer :age
      t.string :image
      t.string :size
      t.string :sex
      t.belongs_to :organization, null: false, foreign_key: true

      t.timestamps
    end
  end
end
