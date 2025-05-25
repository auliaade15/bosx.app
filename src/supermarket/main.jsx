import { createRoot } from "react-dom/client";
import './custom.css';
import ArtikelBuah from "./ArtikelBuah";
import Container from "./Container";
import QnASection from "./QnASection";
import Product from "./Product"

createRoot(document.getElementById("root"))
    .render(
        <div>
            <Container>
                <ArtikelBuah/>
                <QnASection/>
                <Product/>
            </Container>
        </div>
    )