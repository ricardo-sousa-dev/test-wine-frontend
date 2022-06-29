import React, { useState } from 'react';
import database from '../../services/database';
import { Button, Collapse } from 'react-bootstrap';
import './css/HomeFaq.css';

function Faq() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h2 className="mb-3 category">FAQ - Perguntas Frequentes</h2>
      <div className="faq">
        {database.faq.map((quest, index) => (
          <div className="question" key={index}>
            <Button
              onClick={() => setOpen(!open)}
              aria-controls={`${quest.question}`}
              aria-expanded={open}
              className="btn-question"
            >
              {quest.question}
            </Button>
            <Collapse in={open}>
              <div id={`${quest.question}`} className="answer">
                <p>{quest.answer}</p>
              </div>
            </Collapse>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
}

export default Faq;
