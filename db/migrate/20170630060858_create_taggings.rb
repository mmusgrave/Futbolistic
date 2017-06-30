class CreateTaggings < ActiveRecord::Migration
  def change
    create_table :taggings do |t|
      t.integer :story_id, null: false
      t.integer :topic_id, null: false

      t.timestamps
    end
    add_index :taggings, :topic_id
    add_index :taggings, :story_id
  end
end
