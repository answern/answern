import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

let getter = {};

let state = {
	openedTabList: [], // 页面已经打开的 tab 集合 Object {title, tabname, context:{name, query, params}}
	activeTab: "", // 处于激活状态的 tab string tabname
	activeContext: ""
};

let mutations = {
	// 删除tab
	removeTab: (state, { tabname }) => {
		let { openedTabList, activeTab, activeContext } = state;
		if (activeTab === tabname) {
			openedTabList.forEach((tab, index) => {
				if (tab.tabname === tabname) {
					let nextTab = openedTabList[index + 1] || openedTabList[index - 1];
					if (nextTab) {
						activeTab = nextTab.tabname;
						activeContext = nextTab.context;
					} else {
						activeTab = "";
						activeContext = ""
					}
				}
			});
		}
		state.activeTab = activeTab;
		state.activeContext = activeContext;
		state.openedTabList = openedTabList.filter(tab => tab.tabname !== tabname);
	},
	// 添加tab
	addTab: (state, payload) => {
		state.openedTabList.push(payload);
		state.activeTab = payload.tabname;
		state.activeContext = payload.context.name;
	},
	findModule(state, payload) {
		let { tabname } = payload;
		let tabIndex = (state.openedTabList.map(tab => tab.tabname)).indexOf(tabname);
		let isOpendTab = tabIndex != -1;
		if (isOpendTab) {
			state.openedTabList[tabIndex].context = payload.context;
			state.activeTab = payload.tabname;
			state.activeContext = payload.context;
		} else {
			this.commit("addTab", payload);
		}
	}
};

let actions = {
	forwardMod: ({ commit, state }, payload) => {
		commit("findModule", payload);
	},
	addTab: ({ commit }, payload) => {
		commit("addTab", payload);
	}
};

const store = new Vuex.Store({
	state,
	getter,
	mutations,
	actions
});

export default store;