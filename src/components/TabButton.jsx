export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <li>
      {/* Use onClick instead of onSelect */}
      <button 
        className={isSelected ? 'active' : undefined} 
        onClick={onSelect}
      >
        {children}
      </button>
    </li>
  );
}
