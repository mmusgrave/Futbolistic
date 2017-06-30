class CreateTopics < ActiveRecord::Migration
  def change
    create_table :topics do |t|
      t.string :topic_name, null: false
      t.integer :parent_topic_id

      t.timestamps
    end
    add_index :topics, :parent_topic_id
  end
end
