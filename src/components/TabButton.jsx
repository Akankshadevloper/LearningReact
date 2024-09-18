export default function TabButton({children, onSelect}) {
    return (
      <li>
        {/* Use onClick instead of onSelect */}
        <button onClick={onSelect}>{children}</button>
      </li>
    );
  }
  