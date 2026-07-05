export const projects = [
    {
        title: "VisionRAG from Scratch",
        description:
            "Built a visual PDF question-answering system that indexes pages as images instead of flattening them into plain text. The pipeline uses visual page embeddings, Qdrant, a retrieve-then-answer flow, and bounding-box style evidence marking so the answer can point back to where it came from on the page.",
        tags: ["ColPali", "VisionRAG", "Document AI", "Retrieval", "VLMs"],
        link: "https://github.com/snehachetani/vision-RAG",
    },
    {
        title: "Temperature-scaled Subword Surprisal",
        description:
            "Studied how language-model surprisal relates to human reading times when words are split into subword tokens. The work tested temperature scaling with GPT-2 and mGPT on eye-tracking data, then compared what changes at word level, subword level, and across languages.",
        tags: ["Surprisal", "Eye-tracking", "Tokenization", "mGPT", "Mixed-effects models"],
        link: "https://drive.google.com/file/d/1DT2BqgZt_9PHbRL42mWXU6LXdMgtuhFc/view?usp=drive_link",
    },
    {
        title: "CLIP Text-to-Image Search",
        description:
            "Built a small image search system using a contrastive dual-encoder setup. Image and text representations were trained into a shared space, then indexed for fast lookup so a text query could retrieve matching images rather than only classify them.",
        tags: ["CLIP", "FAISS", "ResNet", "Transformer", "InfoNCE"],
        link: "https://github.com/snehachetani/CLIP-Implementation-Scratch",
    },

];