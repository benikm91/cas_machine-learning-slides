import {Component} from '@angular/core';
import {Slide} from "../slide/slide";
import {Question} from "../question-slide/question-slide.component";
import {ConceptTableOfContentLabel} from "../tables-of-content/table-of-content-data";
import {LogisticRegressionTableOfContentLabel} from "../tables-of-content-machine-learning-algorithm/table-of-content-linear-regression-data";

@Component({
  selector: 'gpt-3',
  styleUrls: ['./gpt-3.component.scss'],
  templateUrl: './gpt-3.component.pug',
})
export class Gpt3Component extends Slide {

  crossValidationHref = ConceptTableOfContentLabel.CROSS_VALIDATION.href;
  logisticRegressionHref = LogisticRegressionTableOfContentLabel.MODEL.href;

  iclQuestions = [
    new Question(
      "Was ist In-Context Learning?",
      "Das LLM löst eine neue Aufgabe nur anhand des Prompts, ohne Training (kein fit, keine Änderung der Parameter)."
    ),
    new Question(
      "Was ist der Kontext und ist es immer ein Text?",
      "Der Kontext ist die gesamte Eingabe des Modells: Aufgabenbeschreibung, Beispiele und Eingabe. Nicht immer Text: Bei multimodalen Modellen auch Bilder (z.B. die Grundrisse), intern ist alles eine Folge von Tokens."
    ),
    new Question(
      "Was ist der Unterschied zwischen zero-shot und few-shot learning?",
      "Zero-shot: Nur die Aufgabenbeschreibung, keine Beispiele im Kontext. Few-shot: Zusätzlich einige gelöste Beispiele im Kontext."
    ),
  ];

  agentQuestions = [
    new Question(
      "Was ist RAG?",
      "Retrieval Augmented Generation: Zur Anfrage passendes Wissen wird gesucht und in den Kontext geschrieben, das LLM antwortet damit."
    ),
    new Question(
      "Was ist Tool Calling?",
      "Das LLM schreibt einen Tool-Aufruf als Text, das Harness führt ihn aus und schreibt das Resultat zurück in den Kontext."
    ),
    new Question(
      "Was ist Agentic Workflow?",
      "LLM + Tools + Schleife: Das LLM ruft Tools wiederholt auf, bis es die Aufgabe als gelöst betrachtet."
    ),
    new Question(
      "Was ist der Unterschied zwischen einem (klassischen) RAG und einem Agentic Workflow?",
      "RAG: Fixer Ablauf (suchen, einfügen, antworten), ein LLM-Aufruf. Agentic Workflow: Das LLM entscheidet selbst über Schritte und deren Anzahl, Retrieval kann eines der Tools sein."
    ),
  ];

}
