import csv
import random as r

with open('high_schooler_file.csv', mode='w') as user_file:
    user_writer = csv.writer(user_file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
    user_writer.writerow(['bin_number', 'day_of_week', 'target_smoked'])

    r.seed(100)
    for week in range(4):
        for day in range(7):
            # add times when the user might smoke
            if day is 0:
                data = {
                    'bin_num': [18, 24, 25, 32, 33],
                    'chance': [0.8, 0.9, 0.8, 0.6, 0.5],
                }
            if day in [1, 2, 3, 4]:
                data = {
                    'bin_num': [0, 24],
                    'chance': [0.6, 0.9],
                }
            if day is 5:
                data = {
                    'bin_num': [0, 24, 44, 45, 46, 47],
                    'chance': [0.6, 0.9, 0.6, 0.7, 0.8, 0.9],
                }
            if day is 6:
                data = {
                    'bin_num': [0, 1, 2, 3,
                                4, 5, 24, 25,
                                40, 41],
                    'chance': [0.6, 0.5, 0.4, 0.5,
                               0.3, 0.3, 0.9, 0.8,
                               0.9, 0.9],
                }

            # add data for timeslots "bins" where user won't be smoking for sure
            clean_bin = set([x for x in range(48)])
            clean_bin -= set(data["bin_num"])
            clean_bin = list(clean_bin)
            data["bin_num"] += clean_bin

            clean_chance = [0] * len(clean_bin)
            data["chance"] += clean_chance

            for i_data in range(len(data["bin_num"])):
                target = 0
                result = r.uniform(0, 1)
                if result < data["chance"][i_data]:
                    target = 1
                user_writer.writerow([data["bin_num"][i_data], day, target])
