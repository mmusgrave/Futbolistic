class AddFirstAndLastNameToUsers < ActiveRecord::Migration
  def change
    # add_column table_name, :column_name, :column_type
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
  end
end
