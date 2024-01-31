import verify from 'jsonwebtoken';

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Accès refusé' });
    }

    try {
        const verified = verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next(); // Passe à la prochaine fonction middleware
    } catch (err) {
        res.status(400).json({ message: 'Token invalide' });
    }
}

export default authenticateToken;
