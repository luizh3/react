import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [currentOpen, setIsCurrentOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((item, index) => {
        return (
          <AccordionItem
            currentOpen={currentOpen}
            onOpenChanged={setIsCurrentOpen}
            title={item.title}
            number={index}
            key={item.title}
          >
            {item.text}
          </AccordionItem>
        );
      })}
    </div>
  );
}

function AccordionItem({
  number,
  title,
  currentOpen,
  onOpenChanged,
  children,
}) {
  const isOpen = number === currentOpen;

  function handleToggle() {
    onOpenChanged(isOpen ? null : number);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{number < 9 ? `0${number + 1}` : number + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
