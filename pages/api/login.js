import * as crypto from 'crypto';

export default function handler(req, res) {
    const hash = crypto.createHash('sha512').update(process.env.PASSWORD).digest('hex');
    res.status(200).json({password: hash});
}
