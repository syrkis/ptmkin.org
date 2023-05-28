import { c as create_ssr_component, v as validate_component, e as escape } from "../../../chunks/index2.js";
import { H as Header } from "../../../chunks/Header.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="container">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
	<h1>${escape(data.title)}</h1>
	<p>${escape(data.body)}</p></div>`;
});
export {
  Page as default
};
