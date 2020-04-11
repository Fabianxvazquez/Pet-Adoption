class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.string :name
      t.integer :qty
      t.string :category
      t.belongs_to :pet, null: false, foreign_key: true

      t.timestamps
    end
  end
end
