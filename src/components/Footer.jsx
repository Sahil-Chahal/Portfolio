export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-gray-500 dark:text-gray-500">
          Sahil Chahal &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
