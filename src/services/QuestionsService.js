class QuestionsService {
  async getQuestion(questionId) {
    const response = await fetch(`http://localhost:3001/questions/${questionId}`, {
      method: 'GET',
    })
      .then((res) => res.json());

    return response;
  }

  async getAllQuestions() {
    const response = await fetch('http://localhost:3001/questionsComplete', {
      method: 'GET',
    })
      .then((res) => res.json());

    return response;
  }
}

export default new QuestionsService();
