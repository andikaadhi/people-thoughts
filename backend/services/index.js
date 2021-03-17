const Thought =  require('../models/Thought');

const services = {
    getThoughts: () => {
        const response = Thought.find();
        return response;
    },
    addThought: (author, content) => {
        const newThought = new Thought({
            author, 
            content
        });
        const response = newThought.save();
        return response;
    }
}

module.exports = services;