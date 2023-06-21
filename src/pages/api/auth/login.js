export default function handler(req, res) {
  const body = req.body;

  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  if (!body?.email) {
    res.status(400).json({ message: "Email is required" });
    return;
  }

  if (!body?.password) {
    res.status(400).json({ message: "Password is required" });
    return;
  }

  if (body?.email === "isnan.arifc@gmail.com" && body?.password === "user123") {
    res.status(200).json({ message: "Login sucess", token: "123" });
  } else if (
    body?.email === "fulan.fulin@gmail.com" &&
    body?.password === "user456"
  ) {
    res.status(200).json({ message: "Login sucess", token: "456" });
  } else {
    res.status(400).json({ message: "Email / Password is incorect" });
  }
}
