# Tools

## MarkItDown (file → Markdown)

Microsoft's [markitdown](https://github.com/microsoft/markitdown) converts PDF, Word, PowerPoint, Excel, HTML, images, audio and more into Markdown.

- Install: `pip install 'markitdown[all]'`
- Convert a file: `markitdown path/to/file.pdf -o output.md`
- Pipe: `cat file.docx | markitdown > output.md`
- In Python: `from markitdown import MarkItDown; MarkItDown().convert("file.pdf").text_content`
- Use it whenever a task needs the contents of a PDF, DOCX, PPTX or XLSX file as text.
