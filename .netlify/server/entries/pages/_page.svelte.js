import { c as create_ssr_component, e as escape, v as validate_component, d as each } from "../../chunks/index2.js";
import { H as Header } from "../../chunks/Header.js";
const Post = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { item } = $$props;
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  return `<div class="post"><a href="${"/" + escape(item.slug, true)}"><h1>${escape(item.title)}</h1>
        <h2>${escape(item.date)}</h2>
        <p>${escape(item.body)}</p></a></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="container">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
  ${each(data.body, (item) => {
    return `${validate_component(Post, "Post").$$render($$result, { item }, {}, {})}`;
  })}</div>`;
});
export {
  Page as default
};
