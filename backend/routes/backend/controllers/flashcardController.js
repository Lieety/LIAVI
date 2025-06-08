import openaiService from '../services/openaiService.js';
import User from '../models/User.js';

export const generateFlashcard = async (req, res) => {
  try {
    const userId = req.userId;
    const { prompt } = req.body;

    // Control d'usos segons plans (exemple simplificat)
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'Usuari no trobat' });

    const limits = {
      gratis: 3,
      premium: 50,
      superpremium: 9999999,
    };

    if (user.outputsUsed >= limits[user.plan]) {
      return res.status(403).json({ message: 'Has superat el límit d’outputs del teu pla' });
    }

    const response = await openaiService.generateFlashcard(prompt);

    // Actualitzar el comptador d’usos
    user.outputsUsed += 1;
    await user.save();

    res.status(200).json({ flashcard: response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error generant flashcard' });
  }
};
