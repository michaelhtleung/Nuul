import pandas as pd
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split


data_file_path = './high_schooler_file.csv'
df = pd.read_csv(data_file_path)
X = df[['bin_number', 'day_of_week']]
y = df[['target_smoked']]

# Break off validation set from training data
X_train, X_valid, y_train, y_valid = train_test_split(X, y, train_size=0.8, test_size=0.2,
                                                      random_state=0)
model = DecisionTreeClassifier(random_state=1)
model.fit(X_train, y_train)
print("Training Score: ", model.score(X_train, y_train))
# if this is between 85% and 90%, the model does not underfit or overfit, which is good
print("Testing Score: ", model.score(X_valid, y_valid))
