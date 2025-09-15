import type { Component } from "vue";
import { h } from "vue";

export function renderIcon(icon: Component) {
	return () => h(icon, null, { default: () => h(icon) });
}
