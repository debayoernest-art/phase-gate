
print("\n========== STUDENT GRADE MANAGEMENT ==========")

students = int(input("How many students do you have? "))
subjects = int(input("How many subjects do they offer? "))

student_names = []
subject_names = []
scores = []


for index in range(students):
    name = input(f"Enter student {index + 1} name: ")
    student_names.append(name)


for count in range(subjects):
    subject = input(f"Enter subject {count + 1}: ")
    subject_names.append(subject)


for index in range(students):

    student_scores = []

    print(f"\nEnter scores for {student_names[index]}")

    for count in range(subjects):

        score = int(input(f"{subject_names[count]}: "))

        while score < 0 or score > 100:
            print("Invalid score! Enter between 0 and 100.")
            score = int(input(f"{subject_names[count]}: "))

        student_scores.append(score)

    scores.append(student_scores)




