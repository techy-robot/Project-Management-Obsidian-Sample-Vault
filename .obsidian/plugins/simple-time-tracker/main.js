/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/main.ts
__export(exports, {
  default: () => SimpleTimeTrackerPlugin
});
var import_obsidian4 = __toModule(require("obsidian"));

// src/settings.ts
var defaultSettings = {
  timestampFormat: "YY-MM-DD HH:mm:ss",
  editableTimestampFormat: "YYYY-MM-DD HH:mm:ss",
  csvDelimiter: ",",
  fineGrainedDurations: true,
  reverseSegmentOrder: false,
  timestampDurations: false
};

// src/settings-tab.ts
var import_obsidian = __toModule(require("obsidian"));
var SimpleTimeTrackerSettingsTab = class extends import_obsidian.PluginSettingTab {
  constructor(app2, plugin) {
    super(app2, plugin);
    this.plugin = plugin;
  }
  display() {
    this.containerEl.empty();
    this.containerEl.createEl("h2", { text: "Super Simple Time Tracker Settings" });
    new import_obsidian.Setting(this.containerEl).setName("Timestamp Display Format").setDesc(createFragment((f) => {
      f.createSpan({ text: "The way that timestamps in time tracker tables should be displayed. Uses " });
      f.createEl("a", { text: "moment.js", href: "https://momentjs.com/docs/#/parsing/string-format/" });
      f.createSpan({ text: " syntax." });
    })).addText((t) => {
      t.setValue(String(this.plugin.settings.timestampFormat));
      t.onChange((v) => __async(this, null, function* () {
        this.plugin.settings.timestampFormat = v.length ? v : defaultSettings.timestampFormat;
        yield this.plugin.saveSettings();
      }));
    });
    new import_obsidian.Setting(this.containerEl).setName("CSV Delimiter").setDesc("The delimiter character that should be used when copying a tracker table as CSV. For example, some languages use a semicolon instead of a comma.").addText((t) => {
      t.setValue(String(this.plugin.settings.csvDelimiter));
      t.onChange((v) => __async(this, null, function* () {
        this.plugin.settings.csvDelimiter = v.length ? v : defaultSettings.csvDelimiter;
        yield this.plugin.saveSettings();
      }));
    });
    new import_obsidian.Setting(this.containerEl).setName("Fine-Grained Durations").setDesc("Whether durations should include days, months and years. If this is disabled, additional time units will be displayed as part of the hours.").addToggle((t) => {
      t.setValue(this.plugin.settings.fineGrainedDurations);
      t.onChange((v) => __async(this, null, function* () {
        this.plugin.settings.fineGrainedDurations = v;
        yield this.plugin.saveSettings();
      }));
    });
    new import_obsidian.Setting(this.containerEl).setName("Timestamp Durations").setDesc("Whether durations should be displayed in a timestamp format (12:15:01) rather than the default duration format (12h 15m 1s).").addToggle((t) => {
      t.setValue(this.plugin.settings.timestampDurations);
      t.onChange((v) => __async(this, null, function* () {
        this.plugin.settings.timestampDurations = v;
        yield this.plugin.saveSettings();
      }));
    });
    new import_obsidian.Setting(this.containerEl).setName("Display Segments in Reverse Order").setDesc("Whether older tracker segments should be displayed towards the bottom of the tracker, rather than the top.").addToggle((t) => {
      t.setValue(this.plugin.settings.reverseSegmentOrder);
      t.onChange((v) => __async(this, null, function* () {
        this.plugin.settings.reverseSegmentOrder = v;
        yield this.plugin.saveSettings();
      }));
    });
    this.containerEl.createEl("hr");
    this.containerEl.createEl("p", { text: "Need help using the plugin? Feel free to join the Discord server!" });
    this.containerEl.createEl("a", { href: "https://link.ellpeck.de/discordweb" }).createEl("img", {
      attr: { src: "https://ellpeck.de/res/discord-wide.png" },
      cls: "simple-time-tracker-settings-image"
    });
    this.containerEl.createEl("p", { text: "If you like this plugin and want to support its development, you can do so through my website by clicking this fancy image!" });
    this.containerEl.createEl("a", { href: "https://ellpeck.de/support" }).createEl("img", {
      attr: { src: "https://ellpeck.de/res/generalsupport-wide.png" },
      cls: "simple-time-tracker-settings-image"
    });
  }
};

// src/tracker.ts
var import_obsidian3 = __toModule(require("obsidian"));

// src/confirm-modal.ts
var import_obsidian2 = __toModule(require("obsidian"));
var ConfirmModal = class extends import_obsidian2.Modal {
  constructor(app2, message, callback) {
    super(app2);
    this.message = message;
    this.callback = callback;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.createEl("p", { text: this.message });
    new import_obsidian2.Setting(contentEl).addButton((btn) => btn.setButtonText("Ok").setCta().onClick(() => {
      this.picked = true;
      this.close();
      this.callback(true);
    })).addButton((btn) => btn.setButtonText("Cancel").onClick(() => {
      this.picked = true;
      this.close();
      this.callback(false);
    }));
  }
  onClose() {
    if (!this.picked) {
      this.callback(false);
    }
  }
};

// src/tracker.ts
function saveTracker(tracker, fileName, section) {
  return __async(this, null, function* () {
    let file = app.vault.getAbstractFileByPath(fileName);
    if (!file)
      return;
    let content = yield app.vault.read(file);
    let lines = content.split("\n");
    let prev = lines.filter((_, i) => i <= section.lineStart).join("\n");
    let next = lines.filter((_, i) => i >= section.lineEnd).join("\n");
    content = `${prev}
${JSON.stringify(tracker)}
${next}`;
    yield app.vault.modify(file, content);
  });
}
function loadTracker(json) {
  if (json) {
    try {
      let ret = JSON.parse(json);
      updateLegacyInfo(ret.entries);
      return ret;
    } catch (e) {
      console.log(`Failed to parse Tracker from ${json}`);
    }
  }
  return { entries: [] };
}
function loadAllTrackers(fileName) {
  return __async(this, null, function* () {
    let file = app.vault.getAbstractFileByPath(fileName);
    let content = (yield app.vault.cachedRead(file)).split("\n");
    let trackers = [];
    let curr;
    for (let i = 0; i < content.length; i++) {
      let line = content[i];
      if (line.trimEnd() == "```simple-time-tracker") {
        curr = { lineStart: i + 1, text: "" };
      } else if (curr) {
        if (line.trimEnd() == "```") {
          curr.lineEnd = i - 1;
          let tracker = loadTracker(curr.text);
          trackers.push({ section: curr, tracker });
          curr = void 0;
        } else {
          curr.text += `${line}
`;
        }
      }
    }
    return trackers;
  });
}
function displayTracker(tracker, element, getFile, getSectionInfo, settings, component) {
  element.addClass("simple-time-tracker-container");
  let running = isRunning(tracker);
  let btn = new import_obsidian3.ButtonComponent(element).setClass("clickable-icon").setIcon(`lucide-${running ? "stop" : "play"}-circle`).setTooltip(running ? "End" : "Start").onClick(() => __async(this, null, function* () {
    if (running) {
      endRunningEntry(tracker);
    } else {
      startNewEntry(tracker, newSegmentNameBox.getValue());
    }
    yield saveTracker(tracker, getFile(), getSectionInfo());
  }));
  btn.buttonEl.addClass("simple-time-tracker-btn");
  let newSegmentNameBox = new import_obsidian3.TextComponent(element).setPlaceholder("Segment name").setDisabled(running);
  newSegmentNameBox.inputEl.addClass("simple-time-tracker-txt");
  let timer = element.createDiv({ cls: "simple-time-tracker-timers" });
  let currentDiv = timer.createEl("div", { cls: "simple-time-tracker-timer" });
  let current = currentDiv.createEl("span", { cls: "simple-time-tracker-timer-time" });
  currentDiv.createEl("span", { text: "Current" });
  let totalDiv = timer.createEl("div", { cls: "simple-time-tracker-timer" });
  let total = totalDiv.createEl("span", { cls: "simple-time-tracker-timer-time", text: "0s" });
  totalDiv.createEl("span", { text: "Total" });
  if (tracker.entries.length > 0) {
    let table = element.createEl("table", { cls: "simple-time-tracker-table" });
    table.createEl("tr").append(createEl("th", { text: "Segment" }), createEl("th", { text: "Start time" }), createEl("th", { text: "End time" }), createEl("th", { text: "Duration" }), createEl("th"));
    for (let entry of orderedEntries(tracker.entries, settings))
      addEditableTableRow(tracker, entry, table, newSegmentNameBox, running, getFile, getSectionInfo, settings, 0, component);
    let buttons = element.createEl("div", { cls: "simple-time-tracker-bottom" });
    new import_obsidian3.ButtonComponent(buttons).setButtonText("Copy as table").onClick(() => navigator.clipboard.writeText(createMarkdownTable(tracker, settings)));
    new import_obsidian3.ButtonComponent(buttons).setButtonText("Copy as CSV").onClick(() => navigator.clipboard.writeText(createCsv(tracker, settings)));
  }
  setCountdownValues(tracker, current, total, currentDiv, settings);
  let intervalId = window.setInterval(() => {
    if (!element.isConnected) {
      window.clearInterval(intervalId);
      return;
    }
    setCountdownValues(tracker, current, total, currentDiv, settings);
  }, 1e3);
}
function getDuration(entry) {
  if (entry.subEntries) {
    return getTotalDuration(entry.subEntries);
  } else {
    let endTime = entry.endTime ? (0, import_obsidian3.moment)(entry.endTime) : (0, import_obsidian3.moment)();
    return endTime.diff((0, import_obsidian3.moment)(entry.startTime));
  }
}
function getTotalDuration(entries) {
  let ret = 0;
  for (let entry of entries)
    ret += getDuration(entry);
  return ret;
}
function isRunning(tracker) {
  return !!getRunningEntry(tracker.entries);
}
function getRunningEntry(entries) {
  for (let entry of entries) {
    if (entry.subEntries) {
      let running = getRunningEntry(entry.subEntries);
      if (running)
        return running;
    } else {
      if (!entry.endTime)
        return entry;
    }
  }
  return null;
}
function createMarkdownTable(tracker, settings) {
  let table = [["Segment", "Start time", "End time", "Duration"]];
  for (let entry of orderedEntries(tracker.entries, settings))
    table.push(...createTableSection(entry, settings));
  table.push(["**Total**", "", "", `**${formatDuration(getTotalDuration(tracker.entries), settings)}**`]);
  let ret = "";
  let widths = Array.from(Array(4).keys()).map((i) => Math.max(...table.map((a) => a[i].length)));
  for (let r = 0; r < table.length; r++) {
    if (r == 1)
      ret += "| " + Array.from(Array(4).keys()).map((i) => "-".repeat(widths[i])).join(" | ") + " |\n";
    let row = [];
    for (let i = 0; i < 4; i++)
      row.push(table[r][i].padEnd(widths[i], " "));
    ret += "| " + row.join(" | ") + " |\n";
  }
  return ret;
}
function createCsv(tracker, settings) {
  let ret = "";
  for (let entry of orderedEntries(tracker.entries, settings)) {
    for (let row of createTableSection(entry, settings))
      ret += row.join(settings.csvDelimiter) + "\n";
  }
  return ret;
}
function orderedEntries(entries, settings) {
  return settings.reverseSegmentOrder ? entries.slice().reverse() : entries;
}
function formatTimestamp(timestamp, settings) {
  return (0, import_obsidian3.moment)(timestamp).format(settings.timestampFormat);
}
function formatDuration(totalTime, settings) {
  let ret = "";
  let duration = import_obsidian3.moment.duration(totalTime);
  let hours = settings.fineGrainedDurations ? duration.hours() : Math.floor(duration.asHours());
  if (settings.timestampDurations) {
    if (settings.fineGrainedDurations) {
      let days = Math.floor(duration.asDays());
      if (days > 0)
        ret += days + ".";
    }
    ret += `${hours.toString().padStart(2, "0")}:${duration.minutes().toString().padStart(2, "0")}:${duration.seconds().toString().padStart(2, "0")}`;
  } else {
    if (settings.fineGrainedDurations) {
      let years = Math.floor(duration.asYears());
      if (years > 0)
        ret += years + "y ";
      if (duration.months() > 0)
        ret += duration.months() + "M ";
      if (duration.days() > 0)
        ret += duration.days() + "d ";
    }
    if (hours > 0)
      ret += hours + "h ";
    if (duration.minutes() > 0)
      ret += duration.minutes() + "m ";
    ret += duration.seconds() + "s";
  }
  return ret;
}
function startSubEntry(entry, name) {
  if (!entry.subEntries) {
    entry.subEntries = [__spreadProps(__spreadValues({}, entry), { name: `Part 1` })];
    entry.startTime = null;
    entry.endTime = null;
  }
  if (!name)
    name = `Part ${entry.subEntries.length + 1}`;
  entry.subEntries.push({ name, startTime: (0, import_obsidian3.moment)().toISOString(), endTime: null, subEntries: void 0 });
}
function startNewEntry(tracker, name) {
  if (!name)
    name = `Segment ${tracker.entries.length + 1}`;
  let entry = { name, startTime: (0, import_obsidian3.moment)().toISOString(), endTime: null, subEntries: void 0 };
  tracker.entries.push(entry);
}
function endRunningEntry(tracker) {
  let entry = getRunningEntry(tracker.entries);
  entry.endTime = (0, import_obsidian3.moment)().toISOString();
}
function removeEntry(entries, toRemove) {
  if (entries.contains(toRemove)) {
    entries.remove(toRemove);
    return true;
  } else {
    for (let entry of entries) {
      if (entry.subEntries && removeEntry(entry.subEntries, toRemove)) {
        if (entry.subEntries.length == 1) {
          let single = entry.subEntries[0];
          entry.startTime = single.startTime;
          entry.endTime = single.endTime;
          entry.subEntries = void 0;
        }
        return true;
      }
    }
  }
  return false;
}
function setCountdownValues(tracker, current, total, currentDiv, settings) {
  let running = getRunningEntry(tracker.entries);
  if (running && !running.endTime) {
    current.setText(formatDuration(getDuration(running), settings));
    currentDiv.hidden = false;
  } else {
    currentDiv.hidden = true;
  }
  total.setText(formatDuration(getTotalDuration(tracker.entries), settings));
}
function formatEditableTimestamp(timestamp, settings) {
  return (0, import_obsidian3.moment)(timestamp).format(settings.editableTimestampFormat);
}
function unformatEditableTimestamp(formatted, settings) {
  return (0, import_obsidian3.moment)(formatted, settings.editableTimestampFormat).toISOString();
}
function updateLegacyInfo(entries) {
  for (let entry of entries) {
    if (entry.startTime && !isNaN(+entry.startTime))
      entry.startTime = import_obsidian3.moment.unix(+entry.startTime).toISOString();
    if (entry.endTime && !isNaN(+entry.endTime))
      entry.endTime = import_obsidian3.moment.unix(+entry.endTime).toISOString();
    if (entry.subEntries == null || !entry.subEntries.length)
      entry.subEntries = void 0;
    if (entry.subEntries)
      updateLegacyInfo(entry.subEntries);
  }
}
function createTableSection(entry, settings) {
  let ret = [[
    entry.name,
    entry.startTime ? formatTimestamp(entry.startTime, settings) : "",
    entry.endTime ? formatTimestamp(entry.endTime, settings) : "",
    entry.endTime || entry.subEntries ? formatDuration(getDuration(entry), settings) : ""
  ]];
  if (entry.subEntries) {
    for (let sub of orderedEntries(entry.subEntries, settings))
      ret.push(...createTableSection(sub, settings));
  }
  return ret;
}
function addEditableTableRow(tracker, entry, table, newSegmentNameBox, trackerRunning, getFile, getSectionInfo, settings, indent, component) {
  let entryRunning = getRunningEntry(tracker.entries) == entry;
  let row = table.createEl("tr");
  let nameField = new EditableField(row, indent, entry.name);
  let startField = new EditableTimestampField(row, entry.startTime, settings);
  let endField = new EditableTimestampField(row, entry.endTime, settings);
  row.createEl("td", { text: entry.endTime || entry.subEntries ? formatDuration(getDuration(entry), settings) : "" });
  renderNameAsMarkdown(nameField.label, getFile, component);
  let expandButton = new import_obsidian3.ButtonComponent(nameField.label).setClass("clickable-icon").setClass("simple-time-tracker-expand-button").setIcon(`chevron-${entry.collapsed ? "left" : "down"}`).onClick(() => __async(this, null, function* () {
    if (entry.collapsed) {
      entry.collapsed = void 0;
    } else {
      entry.collapsed = true;
    }
    yield saveTracker(tracker, getFile(), getSectionInfo());
  }));
  if (!entry.subEntries)
    expandButton.buttonEl.style.visibility = "hidden";
  let entryButtons = row.createEl("td");
  entryButtons.addClass("simple-time-tracker-table-buttons");
  new import_obsidian3.ButtonComponent(entryButtons).setClass("clickable-icon").setIcon(`lucide-play`).setTooltip("Continue").setDisabled(trackerRunning).onClick(() => __async(this, null, function* () {
    startSubEntry(entry, newSegmentNameBox.getValue());
    yield saveTracker(tracker, getFile(), getSectionInfo());
  }));
  let editButton = new import_obsidian3.ButtonComponent(entryButtons).setClass("clickable-icon").setTooltip("Edit").setIcon("lucide-pencil").onClick(() => __async(this, null, function* () {
    if (nameField.editing()) {
      entry.name = nameField.endEdit();
      expandButton.buttonEl.style.display = null;
      startField.endEdit();
      entry.startTime = startField.getTimestamp();
      if (!entryRunning) {
        endField.endEdit();
        entry.endTime = endField.getTimestamp();
      }
      yield saveTracker(tracker, getFile(), getSectionInfo());
      editButton.setIcon("lucide-pencil");
      renderNameAsMarkdown(nameField.label, getFile, component);
    } else {
      nameField.beginEdit(entry.name);
      expandButton.buttonEl.style.display = "none";
      if (!entry.subEntries) {
        startField.beginEdit(entry.startTime);
        if (!entryRunning)
          endField.beginEdit(entry.endTime);
      }
      editButton.setIcon("lucide-check");
    }
  }));
  new import_obsidian3.ButtonComponent(entryButtons).setClass("clickable-icon").setTooltip("Remove").setIcon("lucide-trash").setDisabled(entryRunning).onClick(() => __async(this, null, function* () {
    const confirmed = yield showConfirm("Are you sure you want to delete this entry?");
    if (!confirmed) {
      return;
    }
    removeEntry(tracker.entries, entry);
    yield saveTracker(tracker, getFile(), getSectionInfo());
  }));
  if (entry.subEntries && !entry.collapsed) {
    for (let sub of orderedEntries(entry.subEntries, settings))
      addEditableTableRow(tracker, sub, table, newSegmentNameBox, trackerRunning, getFile, getSectionInfo, settings, indent + 1, component);
  }
}
function showConfirm(message) {
  return new Promise((resolve) => {
    const modal = new ConfirmModal(app, message, resolve);
    modal.open();
  });
}
function renderNameAsMarkdown(label, getFile, component) {
  void import_obsidian3.MarkdownRenderer.renderMarkdown(label.innerHTML, label, getFile(), component);
  label.innerHTML = label.querySelector("p").innerHTML;
}
var EditableField = class {
  constructor(row, indent, value) {
    this.cell = row.createEl("td");
    this.label = this.cell.createEl("span", { text: value });
    this.label.style.marginLeft = `${indent}em`;
    this.box = new import_obsidian3.TextComponent(this.cell).setValue(value);
    this.box.inputEl.addClass("simple-time-tracker-input");
    this.box.inputEl.hide();
  }
  editing() {
    return this.label.hidden;
  }
  beginEdit(value) {
    this.label.hidden = true;
    this.box.setValue(value);
    this.box.inputEl.show();
  }
  endEdit() {
    const value = this.box.getValue();
    this.label.setText(value);
    this.box.inputEl.hide();
    this.label.hidden = false;
    return value;
  }
};
var EditableTimestampField = class extends EditableField {
  constructor(row, value, settings) {
    super(row, 0, value ? formatTimestamp(value, settings) : "");
    this.settings = settings;
  }
  beginEdit(value) {
    super.beginEdit(value ? formatEditableTimestamp(value, this.settings) : "");
  }
  endEdit() {
    const value = this.box.getValue();
    let displayValue = value;
    if (value) {
      const timestamp = unformatEditableTimestamp(value, this.settings);
      displayValue = formatTimestamp(timestamp, this.settings);
    }
    this.label.setText(displayValue);
    this.box.inputEl.hide();
    this.label.hidden = false;
    return value;
  }
  getTimestamp() {
    if (this.box.getValue()) {
      return unformatEditableTimestamp(this.box.getValue(), this.settings);
    } else {
      return null;
    }
  }
};

// src/main.ts
var SimpleTimeTrackerPlugin = class extends import_obsidian4.Plugin {
  constructor() {
    super(...arguments);
    this.api = {
      loadTracker,
      loadAllTrackers,
      getDuration,
      getTotalDuration,
      getRunningEntry,
      isRunning,
      formatTimestamp: (timestamp) => formatTimestamp(timestamp, this.settings),
      formatDuration: (totalTime) => formatDuration(totalTime, this.settings),
      orderedEntries: (entries) => orderedEntries(entries, this.settings)
    };
  }
  onload() {
    return __async(this, null, function* () {
      yield this.loadSettings();
      this.addSettingTab(new SimpleTimeTrackerSettingsTab(this.app, this));
      this.registerMarkdownCodeBlockProcessor("simple-time-tracker", (s, e, i) => {
        e.empty();
        let component = new import_obsidian4.MarkdownRenderChild(e);
        let tracker = loadTracker(s);
        let filePath = i.sourcePath;
        const getFile = () => filePath;
        component.registerEvent(this.app.vault.on("rename", (file, oldPath) => {
          if (file instanceof import_obsidian4.TFile && oldPath === filePath) {
            filePath = file.path;
          }
        }));
        displayTracker(tracker, e, getFile, () => i.getSectionInfo(e), this.settings, component);
        i.addChild(component);
      });
      this.addCommand({
        id: `insert`,
        name: `Insert Time Tracker`,
        editorCallback: (e, _) => {
          e.replaceSelection("```simple-time-tracker\n```\n");
        }
      });
    });
  }
  loadSettings() {
    return __async(this, null, function* () {
      this.settings = Object.assign({}, defaultSettings, yield this.loadData());
    });
  }
  saveSettings() {
    return __async(this, null, function* () {
      yield this.saveData(this.settings);
    });
  }
};
