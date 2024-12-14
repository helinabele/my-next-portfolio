export default function Footer() {
  return (
    <footer className="flex justify-center items-center p-4 bg-gray-900 text-gray-400">
      <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
    </footer>
  );
}
