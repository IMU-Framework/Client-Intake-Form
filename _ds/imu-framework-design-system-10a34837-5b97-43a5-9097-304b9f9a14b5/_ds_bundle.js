/* @ds-bundle: {"format":3,"namespace":"IMUFrameworkDesignSystem_10a348","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Overline","sourcePath":"components/core/Overline.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"7d7d14671861","components/core/Badge.jsx":"a29764aa3f69","components/core/Button.jsx":"50afc161e1fb","components/core/Card.jsx":"33ac7595212a","components/core/Divider.jsx":"8f926453ff31","components/core/IconButton.jsx":"edcc4c4e48d9","components/core/Input.jsx":"4a9f7fcd9cba","components/core/Logo.jsx":"dac9b9db6be5","components/core/Overline.jsx":"8698159dfabd","components/core/Tag.jsx":"ae7e101a1cc8","ui_kits/studio-site/Footer.jsx":"9f095ab046f5","ui_kits/studio-site/Header.jsx":"90495aca7c28","ui_kits/studio-site/Hero.jsx":"c6ea23073145","ui_kits/studio-site/Services.jsx":"0a2e5f8ad876","ui_kits/studio-site/Studio.jsx":"730283db5211","ui_kits/studio-site/Work.jsx":"53f63a49429e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.IMUFrameworkDesignSystem_10a348 = window.IMUFrameworkDesignSystem_10a348 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** IMU — Avatar: square-with-small-radius (matches brand geometry), initials or image. */
function Avatar({
  name = "",
  src,
  size = 40,
  tone = "brand",
  style = {},
  ...rest
}) {
  const initials = name.split(" ").map(p => p[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
  const tones = {
    brand: {
      bg: "var(--imu-blue-600)",
      fg: "var(--imu-white)"
    },
    ink: {
      bg: "var(--imu-ink)",
      fg: "var(--imu-white)"
    },
    soft: {
      bg: "var(--imu-blue-50)",
      fg: "var(--text-brand)"
    }
  };
  const t = tones[tone] || tones.brand;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: size,
      height: size,
      borderRadius: "var(--radius-md)",
      overflow: "hidden",
      flex: "none",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: t.bg,
      color: t.fg,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-medium)",
      fontSize: size * 0.4,
      letterSpacing: "0.02em",
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials || "·");
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** IMU — Badge: small status/count indicator. Square-ish, not pill. */
function Badge({
  children,
  tone = "neutral",
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      bg: "var(--imu-neutral-150)",
      fg: "var(--text-body)"
    },
    brand: {
      bg: "var(--imu-blue-600)",
      fg: "var(--imu-white)"
    },
    success: {
      bg: "var(--imu-success)",
      fg: "var(--imu-white)"
    },
    warning: {
      bg: "var(--imu-warning)",
      fg: "var(--imu-white)"
    },
    danger: {
      bg: "var(--imu-danger)",
      fg: "var(--imu-white)"
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: 20,
      height: 20,
      padding: "0 6px",
      fontFamily: "var(--font-mono)",
      fontSize: "0.6875rem",
      fontWeight: "var(--fw-medium)",
      lineHeight: 1,
      borderRadius: "var(--radius-sm)",
      background: t.bg,
      color: t.fg,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IMU Framework Design — Button
 * Geometric, monoline-aware button. Small radius, measured motion.
 */
function Button({
  children,
  variant = "primary",
  // primary | secondary | outline | ghost
  size = "md",
  // sm | md | lg
  disabled = false,
  fullWidth = false,
  iconLeft = null,
  iconRight = null,
  type = "button",
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "0 14px",
      height: 34,
      fontSize: "0.8125rem"
    },
    md: {
      padding: "0 20px",
      height: 42,
      fontSize: "0.9375rem"
    },
    lg: {
      padding: "0 28px",
      height: 50,
      fontSize: "1.0625rem"
    }
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    fontFamily: "var(--font-sans)",
    fontWeight: "var(--fw-medium)",
    letterSpacing: "var(--ls-wide)",
    lineHeight: 1,
    border: "var(--border-w) solid transparent",
    borderRadius: "var(--radius-md)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    width: fullWidth ? "100%" : "auto",
    transition: "background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)",
    whiteSpace: "nowrap",
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: "var(--action-primary)",
      color: "var(--text-on-blue)",
      borderColor: "var(--action-primary)"
    },
    secondary: {
      background: "var(--imu-ink)",
      color: "var(--imu-white)",
      borderColor: "var(--imu-ink)"
    },
    outline: {
      background: "transparent",
      color: "var(--text-brand)",
      borderColor: "var(--border-brand)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-strong)",
      borderColor: "transparent"
    }
  };
  const hover = {
    primary: (e, on) => e.currentTarget.style.background = on ? "var(--action-primary-hover)" : "var(--action-primary)",
    secondary: (e, on) => e.currentTarget.style.background = on ? "var(--imu-neutral-800)" : "var(--imu-ink)",
    outline: (e, on) => e.currentTarget.style.background = on ? "var(--imu-blue-50)" : "transparent",
    ghost: (e, on) => e.currentTarget.style.background = on ? "var(--imu-neutral-100)" : "transparent"
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: {
      ...base,
      ...variants[variant],
      ...style
    },
    onMouseEnter: e => !disabled && hover[variant](e, true),
    onMouseLeave: e => !disabled && hover[variant](e, false),
    onFocus: e => e.currentTarget.style.boxShadow = "var(--shadow-focus)",
    onBlur: e => e.currentTarget.style.boxShadow = "none"
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IMU — Card: white surface, hairline border, small radius, faint shadow.
 * The architectural "drawn" card. Structure via line, not heavy elevation.
 */
function Card({
  children,
  padding = 24,
  hoverable = false,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => hoverable && setHover(true),
    onMouseLeave: () => hoverable && setHover(false),
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-md)",
      boxShadow: hover ? "var(--shadow-md)" : "var(--shadow-sm)",
      padding,
      transition: "box-shadow var(--dur-normal) var(--ease-standard), border-color var(--dur-normal) var(--ease-standard)",
      borderColor: hover ? "var(--imu-neutral-300)" : "var(--border-hairline)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** IMU — Divider: hairline rule. The brand communicates structure with lines. */
function Divider({
  vertical = false,
  label,
  style = {},
  ...rest
}) {
  if (label) {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: "var(--border-hairline)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "var(--fs-overline)",
        letterSpacing: "var(--ls-overline)",
        textTransform: "uppercase",
        color: "var(--text-subtle)"
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: "var(--border-hairline)"
      }
    }));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: vertical ? {
      width: 1,
      alignSelf: "stretch",
      background: "var(--border-hairline)",
      ...style
    } : {
      height: 1,
      width: "100%",
      background: "var(--border-hairline)",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** IMU — IconButton: square monoline icon affordance. Pass a Lucide (or any) icon node. */
function IconButton({
  children,
  variant = "ghost",
  // ghost | outline | solid
  size = 40,
  disabled = false,
  ariaLabel,
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const variants = {
    ghost: {
      bg: hover ? "var(--imu-neutral-100)" : "transparent",
      color: "var(--text-strong)",
      border: "transparent"
    },
    outline: {
      bg: hover ? "var(--imu-blue-50)" : "transparent",
      color: "var(--text-brand)",
      border: "var(--border-default)"
    },
    solid: {
      bg: hover ? "var(--action-primary-hover)" : "var(--action-primary)",
      color: "var(--imu-white)",
      border: "transparent"
    }
  };
  const v = variants[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: size,
      height: size,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: v.bg,
      color: v.color,
      border: `var(--border-w) solid ${v.border}`,
      borderRadius: "var(--radius-md)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transition: "background var(--dur-fast) var(--ease-standard)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** IMU — Input: monoline field, square-ish, blue focus ring. */
function Input({
  label,
  hint,
  type = "text",
  error = false,
  fullWidth = true,
  style = {},
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || `imu-in-${Math.random().toString(36).slice(2, 8)}`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: fullWidth ? "100%" : "auto"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: "block",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-overline)",
      letterSpacing: "var(--ls-overline)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: 7
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      boxSizing: "border-box",
      height: 44,
      padding: "0 14px",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-body)",
      color: "var(--text-strong)",
      background: "var(--surface-page)",
      border: `var(--border-w) solid ${error ? "var(--imu-danger)" : focus ? "var(--border-brand)" : "var(--border-default)"}`,
      borderRadius: "var(--radius-md)",
      outline: "none",
      boxShadow: focus ? "var(--shadow-focus)" : "none",
      transition: "border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)",
      ...style
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: "var(--fs-caption)",
      color: error ? "var(--imu-danger)" : "var(--text-subtle)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IMU Framework Design — Logo
 * Renders the brand lockups from /assets. Set `basePath` to the relative
 * location of the assets/ folder from the rendering page (e.g. "../../").
 */
function Logo({
  variant = "banner",
  // banner | mark | badge | wordmark
  tone = "black",
  // black | blue | white
  basePath = "",
  height,
  src,
  alt = "IMU Framework Design",
  style = {},
  ...rest
}) {
  const map = {
    "banner-black": "assets/logo-banner.png",
    "banner-white": "assets/logo-banner-white.png",
    "banner-blue": "assets/logo-banner.png",
    "mark-black": "assets/logo-mark-black.png",
    "mark-blue": "assets/logo-mark-blue.png",
    "mark-white": "assets/logo-mark-white.png",
    "badge-black": "assets/logo-badge-black.png",
    "badge-blue": "assets/logo-badge-blue.png",
    "badge-white": "assets/logo-badge-blue.png"
  };
  const key = variant === "wordmark" ? `banner-${tone}` : `${variant}-${tone}`;
  const resolved = src || basePath + (map[key] || map["mark-black"]);
  const defaultH = variant === "banner" || variant === "wordmark" ? 40 : 48;
  // Coerce numeric strings (e.g. height="30" from markup attributes) to a
  // Number so React appends "px"; keep explicit units like "2rem" as-is.
  const rawH = height == null || height === "" ? defaultH : height;
  const resolvedHeight = typeof rawH === "string" && rawH.trim() !== "" && !isNaN(Number(rawH)) ? Number(rawH) : rawH;
  return /*#__PURE__*/React.createElement("img", _extends({
    src: resolved,
    alt: alt,
    style: {
      height: resolvedHeight,
      width: "auto",
      display: "block",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Overline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** IMU — Overline: uppercase mono label, wide tracking. The brand's signature label. */
function Overline({
  children,
  color = "var(--text-muted)",
  as = "div",
  style = {},
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-overline)",
      letterSpacing: "var(--ls-overline)",
      textTransform: "uppercase",
      color,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Overline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Overline.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** IMU — Tag: pill chip for categories/filters. One of the few pill-shaped elements in the system. */
function Tag({
  children,
  tone = "neutral",
  active = false,
  style = {},
  onClick,
  ...rest
}) {
  const tones = {
    neutral: {
      bg: "var(--imu-neutral-100)",
      fg: "var(--text-body)",
      bd: "var(--imu-neutral-200)"
    },
    brand: {
      bg: "var(--imu-blue-50)",
      fg: "var(--text-brand)",
      bd: "var(--imu-blue-200)"
    },
    ink: {
      bg: "var(--imu-ink)",
      fg: "var(--imu-white)",
      bd: "var(--imu-ink)"
    }
  };
  const t = active ? tones.ink : tones[tone];
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "var(--font-mono)",
      fontSize: "0.6875rem",
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      padding: "5px 11px",
      borderRadius: "var(--radius-pill)",
      background: t.bg,
      color: t.fg,
      border: `1px solid ${t.bd}`,
      cursor: onClick ? "pointer" : "default",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-site/Footer.jsx
try { (() => {
// IMU studio site — dark contact footer with working mini form + namecard details.
function Footer() {
  const {
    Logo,
    Input,
    Button,
    Overline,
    Divider
  } = window.IMUFrameworkDesignSystem_10a348;
  const [sent, setSent] = React.useState(false);
  const [email, setEmail] = React.useState("");
  return /*#__PURE__*/React.createElement("footer", {
    id: "contact",
    style: {
      background: "var(--surface-inverse)",
      color: "var(--imu-white)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "var(--space-8) var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Overline, {
    color: "var(--imu-peri-300)"
  }, "Start a project"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-medium)",
      fontSize: "var(--fs-h2)",
      letterSpacing: "var(--ls-heading)",
      margin: "var(--space-3) 0 var(--space-5)",
      color: "var(--imu-white)"
    }
  }, "Tell us what needs framing."), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-body-sm)",
      color: "var(--imu-peri-300)",
      letterSpacing: "0.04em"
    }
  }, "\u2713 Thanks \u2014 we'll reply to ", email || "you", " within two working days.") : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "flex-end",
      maxWidth: 460
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@studio.com",
    value: email,
    onChange: e => setEmail(e.target.value),
    style: {
      background: "var(--imu-neutral-900)",
      color: "var(--imu-white)",
      borderColor: "var(--imu-neutral-700)"
    }
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "md",
    type: "submit"
  }, "Send"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      justifyContent: "center"
    }
  }, [["Contact", "簡宛昱 Ivia Chien"], ["Email", "imuchien@gmail.com"], ["Phone", "0911-026-175"], ["Studio", "325 桃園市龍潭區民治路126號3樓之六"]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-overline)",
      letterSpacing: "var(--ls-overline)",
      textTransform: "uppercase",
      color: "var(--imu-peri-400)",
      minWidth: 80
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-body-sm)",
      color: "var(--imu-neutral-200)"
    }
  }, v))))), /*#__PURE__*/React.createElement(Divider, {
    style: {
      background: "var(--imu-neutral-800)",
      margin: "var(--space-7) 0 var(--space-5)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "banner",
    tone: "white",
    basePath: "../../",
    height: 26
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-caption)",
      color: "var(--imu-neutral-500)"
    }
  }, "\u4E00\u755D\u6846\u4F5C\u6709\u9650\u516C\u53F8 \xB7 83777294 \xB7 \xA9 2026"))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-site/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-site/Header.jsx
try { (() => {
// IMU studio site — sticky header. Composes Logo + Button primitives.
function Header({
  onNav,
  onStart
}) {
  const {
    Logo,
    Button
  } = window.IMUFrameworkDesignSystem_10a348;
  const links = [["work", "Work"], ["services", "Services"], ["studio", "Studio"], ["contact", "Contact"]];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "rgba(255,255,255,0.86)",
      backdropFilter: "saturate(180%) blur(10px)",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "0 var(--space-6)",
      height: 72,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    onClick: e => {
      e.preventDefault();
      onNav("top");
    },
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "banner",
    tone: "black",
    basePath: "../../",
    height: 30
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-6)"
    }
  }, links.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: "#" + id,
    onClick: e => {
      e.preventDefault();
      onNav(id);
    },
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "0.75rem",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      textDecoration: "none"
    },
    onMouseEnter: e => e.currentTarget.style.color = "var(--text-brand)",
    onMouseLeave: e => e.currentTarget.style.color = "var(--text-muted)"
  }, label)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: onStart
  }, "Start a project"))));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-site/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-site/Hero.jsx
try { (() => {
// IMU studio site — hero. Big geometric headline + the mark as a structural graphic.
function Hero({
  onStart,
  onNav
}) {
  const {
    Button,
    Overline
  } = window.IMUFrameworkDesignSystem_10a348;
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "var(--space-9) var(--space-6) var(--space-8)",
      display: "grid",
      gridTemplateColumns: "1.25fr 0.75fr",
      gap: "var(--space-7)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Overline, {
    color: "var(--text-brand)",
    style: {
      marginBottom: "var(--space-5)"
    }
  }, "DATA \xB7 2D \xB7 3D \xB7 \u8DE8\u7DAD\u5EA6\u8A2D\u8A08\u9867\u554F\u670D\u52D9"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--fs-display)",
      lineHeight: "var(--lh-tight)",
      letterSpacing: "var(--ls-display)",
      color: "var(--text-strong)",
      margin: "0 0 var(--space-5)",
      textWrap: "balance"
    }
  }, "We frame the problem,", /*#__PURE__*/React.createElement("br", null), "then add the", /*#__PURE__*/React.createElement("br", null), "missing dimension."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-lg)",
      lineHeight: "var(--lh-relaxed)",
      color: "var(--text-muted)",
      maxWidth: 520,
      margin: "0 0 var(--space-6)"
    }
  }, "\u4E00\u755D\u6846\u4F5C\u8A2D\u8A08 \u2014 a cross-dimensional design consultancy working between data, 2D and 3D. We help teams see structure, then build it."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onStart
  }, "Start a project"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    onClick: () => onNav("work")
  }, "View selected work"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "linear-gradient(var(--border-hairline) 1px, transparent 1px), linear-gradient(90deg, var(--border-hairline) 1px, transparent 1px)",
      backgroundSize: "32px 32px",
      maskImage: "radial-gradient(circle at center, #000 38%, transparent 72%)",
      WebkitMaskImage: "radial-gradient(circle at center, #000 38%, transparent 72%)"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark-blue.png",
    alt: "IMU mark",
    style: {
      width: "76%",
      maxWidth: 300,
      position: "relative",
      zIndex: 1
    }
  })));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-site/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-site/Services.jsx
try { (() => {
// IMU studio site — services: DATA / 2D / 3D, three monoline columns.
function Services() {
  const {
    Overline,
    Divider
  } = window.IMUFrameworkDesignSystem_10a348;
  const items = [["01", "DATA", "data-driven design", "Turning datasets into legible structure — dashboards, data visualisation and information systems that hold up under scrutiny.", "bar-chart-3"], ["02", "2D", "graphic & interface", "Identity, editorial layout, and interface design. Drawn with a single confident line and a lot of considered space.", "pen-tool"], ["03", "3D", "spatial & dimensional", "Spatial studies, product and architectural visualisation — the missing dimension, modelled and rendered.", "box"]];
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    style: {
      background: "var(--surface-sunken)",
      borderTop: "1px solid var(--border-hairline)",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "var(--space-8) var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Overline, {
    color: "var(--text-subtle)"
  }, "Services"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-medium)",
      fontSize: "var(--fs-h2)",
      letterSpacing: "var(--ls-heading)",
      color: "var(--text-strong)",
      margin: "var(--space-3) 0 var(--space-7)"
    }
  }, "Three dimensions, one framework."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--space-6)"
    }
  }, items.map(([num, code, sub, body, icon]) => /*#__PURE__*/React.createElement("div", {
    key: num
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "0.75rem",
      color: "var(--text-subtle)",
      letterSpacing: "0.1em"
    }
  }, num), /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 22,
      height: 22,
      color: "var(--text-brand)"
    }
  })), /*#__PURE__*/React.createElement(Divider, {
    style: {
      margin: "var(--space-3) 0 var(--space-4)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--fs-h3)",
      color: "var(--text-strong)",
      letterSpacing: "0.02em"
    }
  }, code), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-overline)",
      letterSpacing: "var(--ls-overline)",
      textTransform: "uppercase",
      color: "var(--text-brand)",
      margin: "var(--space-2) 0 var(--space-3)"
    }
  }, sub), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-sm)",
      lineHeight: "var(--lh-relaxed)",
      color: "var(--text-muted)",
      margin: 0
    }
  }, body))))));
}
window.Services = Services;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-site/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-site/Studio.jsx
try { (() => {
// IMU studio site — studio/about strip with stats.
function Studio() {
  const {
    Overline,
    Divider
  } = window.IMUFrameworkDesignSystem_10a348;
  const stats = [["12+", "years of practice"], ["3", "dimensions"], ["桃園", "Taoyuan, Taiwan"]];
  return /*#__PURE__*/React.createElement("section", {
    id: "studio",
    style: {
      background: "var(--surface-sunken)",
      borderTop: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-lg)",
      margin: "0 auto",
      padding: "var(--space-8) var(--space-6)",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-8)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Overline, {
    color: "var(--text-subtle)"
  }, "Studio"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-light)",
      fontSize: "var(--fs-h3)",
      lineHeight: "var(--lh-snug)",
      letterSpacing: "var(--ls-heading)",
      color: "var(--text-strong)",
      margin: "var(--space-4) 0 var(--space-5)",
      textWrap: "balance"
    }
  }, "\u4E00\u755D\u6846\u4F5C \u2014 \"one field, framed.\" We draw a frame around a problem and add the dimension it was missing."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body)",
      lineHeight: "var(--lh-relaxed)",
      color: "var(--text-muted)",
      margin: 0
    }
  }, "IMU Framework Design is a small consultancy led by Ivia Chien, working with teams across data, graphic and spatial design.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, stats.map(([n, l], i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--fs-h1)",
      color: "var(--text-brand)",
      letterSpacing: "var(--ls-display)",
      minWidth: 120
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-caption)",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, l)), i < stats.length - 1 && /*#__PURE__*/React.createElement(Divider, {
    style: {
      marginTop: "var(--space-4)"
    }
  }))))));
}
window.Studio = Studio;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-site/Studio.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-site/Work.jsx
try { (() => {
// IMU studio site — selected work grid. Monochrome placeholder tiles (no real imagery supplied).
function Work() {
  const {
    Overline,
    Tag
  } = window.IMUFrameworkDesignSystem_10a348;
  const projects = [["Spatial data study", "DATA · 3D", "var(--imu-blue-600)"], ["Civic wayfinding", "2D", "var(--imu-ink)"], ["Sensor network atlas", "DATA", "var(--imu-blue-800)"], ["Pavilion massing", "3D", "var(--imu-neutral-800)"]];
  return /*#__PURE__*/React.createElement("section", {
    id: "work",
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "var(--space-8) var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginBottom: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Overline, {
    color: "var(--text-subtle)"
  }, "Selected work"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-medium)",
      fontSize: "var(--fs-h2)",
      letterSpacing: "var(--ls-heading)",
      color: "var(--text-strong)",
      margin: "var(--space-3) 0 0"
    }
  }, "Recent frameworks")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-caption)",
      color: "var(--text-subtle)"
    }
  }, "2023 \u2014 2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-5)"
    }
  }, projects.map(([title, tag, color], i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#work",
    onClick: e => e.preventDefault(),
    style: {
      textDecoration: "none",
      display: "block"
    },
    onMouseEnter: e => {
      e.currentTarget.querySelector(".tile").style.transform = "scale(1.015)";
    },
    onMouseLeave: e => {
      e.currentTarget.querySelector(".tile").style.transform = "scale(1)";
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tile",
    style: {
      height: 240,
      background: color,
      borderRadius: "var(--radius-md)",
      position: "relative",
      overflow: "hidden",
      transition: "transform var(--dur-slow) var(--ease-standard)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark-white.png",
    alt: "",
    style: {
      width: 84,
      opacity: 0.9
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 14,
      left: 16,
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-overline)",
      letterSpacing: "var(--ls-overline)",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.7)"
    }
  }, String(i + 1).padStart(2, "0"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-medium)",
      fontSize: "var(--fs-h5)",
      color: "var(--text-strong)"
    }
  }, title), /*#__PURE__*/React.createElement(Tag, {
    tone: "neutral"
  }, tag))))));
}
window.Work = Work;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-site/Work.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Overline = __ds_scope.Overline;

__ds_ns.Tag = __ds_scope.Tag;

})();
