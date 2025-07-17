export default function decorate(block) {
  const [quoteWrapper] = block.children;

  const blockquote = document.createElement('blockquote');
  blockquote.innerHTML = quoteWrapper.textContent.trim();
  quoteWrapper.replaceChildren(blockquote);
}
