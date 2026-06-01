import tkinter as tk

# Flashcards data
flashcards = [
    {"question": "What is Python?", "answer": "A programming language"},
    {"question": "Capital of France?", "answer": "Paris"}
]

index = 0

def show_question():
    question_label.config(text=flashcards[index]["question"])
    answer_label.config(text="")  # hide answer

def show_answer():
    answer_label.config(text=flashcards[index]["answer"])

def next_card():
    global index
    if index < len(flashcards) - 1:
        index += 1
        show_question()

def prev_card():
    global index
    if index > 0:
        index -= 1
        show_question()

# UI setup
root = tk.Tk()
root.title("Flashcard Quiz App")

question_label = tk.Label(root, text="", font=("Arial", 16))
question_label.pack(pady=20)

answer_label = tk.Label(root, text="", font=("Arial", 14), fg="blue")
answer_label.pack(pady=10)

tk.Button(root, text="Show Answer", command=show_answer).pack()
tk.Button(root, text="Previous", command=prev_card).pack(side="left", padx=20)
tk.Button(root, text="Next", command=next_card).pack(side="right", padx=20)

show_question()
root.mainloop()
