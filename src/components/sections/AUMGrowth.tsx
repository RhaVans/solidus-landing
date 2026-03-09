"use client";

import { useLanguage } from "../LanguageContext";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Filler,
    Tooltip,
    Legend,
    TooltipItem,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Filler,
    Tooltip,
    Legend
);

// --- DATA ---
const INITIAL_INVESTMENT = 1_000_000_000; // $1B

// Yearly returns (varying around 45% avg)
const annualReturns = [
    38, 52, 41, 55, 43, 48, 36, 51, 44, 49,
    42, 53, 39, 47, 57,
];

// Asset allocation per year (percentages, must sum to 100)
// Year 1-3: BTC, Novacore Aeroworks, Bonds
// Year 4-10: BTC, Bonds, Novacore Aeroworks
// Year 11-15: same portfolio as web (BTC, Novacore Aeroworks, Bonds)
const allocations = [
    // Yr1-3
    { BTC: 42, "Novacore Aeroworks": 25, Bonds: 33 },
    { BTC: 38, "Novacore Aeroworks": 29, Bonds: 33 },
    { BTC: 45, "Novacore Aeroworks": 22, Bonds: 33 },
    // Yr4-10
    { BTC: 40, "Novacore Aeroworks": 27, Bonds: 33 },
    { BTC: 35, "Novacore Aeroworks": 32, Bonds: 33 },
    { BTC: 43, "Novacore Aeroworks": 24, Bonds: 33 },
    { BTC: 37, "Novacore Aeroworks": 30, Bonds: 33 },
    { BTC: 44, "Novacore Aeroworks": 23, Bonds: 33 },
    { BTC: 36, "Novacore Aeroworks": 31, Bonds: 33 },
    { BTC: 41, "Novacore Aeroworks": 26, Bonds: 33 },
    // Yr11-15
    { BTC: 38, "Novacore Aeroworks": 29, Bonds: 33 },
    { BTC: 35, "Novacore Aeroworks": 32, Bonds: 33 },
    { BTC: 40, "Novacore Aeroworks": 27, Bonds: 33 },
    { BTC: 42, "Novacore Aeroworks": 25, Bonds: 33 },
    { BTC: 37, "Novacore Aeroworks": 30, Bonds: 33 },
];

const YEARS = Array.from({ length: 15 }, (_, i) => 2011 + i);
const YEAR_LABELS = YEARS.map(String);

function computeAUM() {
    const values = [INITIAL_INVESTMENT];
    for (let i = 0; i < annualReturns.length; i++) {
        values.push(values[i] * (1 + annualReturns[i] / 100));
    }
    return values; // 16 items (year 0 to 15)
}

function formatB(val: number) {
    if (val >= 1e9) return `$${(val / 1e9).toFixed(1)}B`;
    if (val >= 1e6) return `$${(val / 1e6).toFixed(0)}M`;
    return `$${val.toFixed(0)}`;
}

const CHART_COLORS = {
    primary: "rgba(59, 130, 246, 1)",
    primaryFill: "rgba(59, 130, 246, 0.15)",
    bar: "rgba(59, 130, 246, 0.8)",
    barHover: "rgba(59, 130, 246, 1)",
    btc: "rgba(247, 147, 26, 0.85)",
    nova: "rgba(37, 99, 235, 0.85)",
    bonds: "rgba(148, 163, 184, 0.85)",
    gridColor: "rgba(255, 255, 255, 0.06)",
    tickColor: "rgba(156, 163, 175, 0.7)",
};

type TabKey = "aum" | "returns" | "allocation";

export default function AUMGrowthSection() {
    const { lang } = useLanguage();
    const [activeTab, setActiveTab] = useState<TabKey>("aum");
    const aumValues = useMemo(() => computeAUM(), []);

    const tabs: { key: TabKey; label: string }[] = [
        { key: "aum", label: lang("Pertumbuhan AUM", "AUM Growth") },
        { key: "returns", label: lang("Return Tahunan", "Annual Returns") },
        { key: "allocation", label: lang("Alokasi Portofolio", "Portfolio Allocation") },
    ];

    // --- AUM LINE CHART ---
    const aumChartData = {
        labels: ["Start", ...YEAR_LABELS],
        datasets: [
            {
                label: "AUM",
                data: aumValues,
                borderColor: CHART_COLORS.primary,
                backgroundColor: CHART_COLORS.primaryFill,
                borderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 7,
                pointBackgroundColor: CHART_COLORS.primary,
                pointBorderColor: "#0a0a0a",
                pointBorderWidth: 2,
                tension: 0.35,
                fill: true,
            },
        ],
    };

    const aumChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { intersect: false, mode: "index" as const },
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: "rgba(10, 10, 10, 0.95)",
                borderColor: "rgba(59, 130, 246, 0.3)",
                borderWidth: 1,
                titleColor: "#9ca3af",
                bodyColor: "#ffffff",
                titleFont: { size: 12, weight: "normal" as const },
                bodyFont: { size: 14, weight: "bold" as const },
                padding: 12,
                displayColors: false,
                callbacks: {
                    label: (ctx: TooltipItem<"line">) => formatB(ctx.parsed.y ?? 0),
                },
            },
        },
        scales: {
            x: {
                grid: { color: CHART_COLORS.gridColor },
                ticks: { color: CHART_COLORS.tickColor, font: { size: 11 } },
                border: { display: false },
            },
            y: {
                grid: { color: CHART_COLORS.gridColor },
                ticks: {
                    color: CHART_COLORS.tickColor,
                    font: { size: 11 },
                    callback: (val: number | string) => formatB(Number(val)),
                },
                border: { display: false },
            },
        },
    };

    // --- ANNUAL RETURNS BAR CHART ---
    const returnsChartData = {
        labels: YEAR_LABELS,
        datasets: [
            {
                label: lang("Return (%)", "Return (%)"),
                data: annualReturns,
                backgroundColor: annualReturns.map((r) =>
                    r >= 45 ? "rgba(34, 197, 94, 0.7)" : "rgba(59, 130, 246, 0.7)"
                ),
                hoverBackgroundColor: annualReturns.map((r) =>
                    r >= 45 ? "rgba(34, 197, 94, 1)" : "rgba(59, 130, 246, 1)"
                ),
                borderRadius: 4,
                borderSkipped: false,
            },
        ],
    };

    const returnsChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { intersect: false, mode: "index" as const },
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: "rgba(10, 10, 10, 0.95)",
                borderColor: "rgba(59, 130, 246, 0.3)",
                borderWidth: 1,
                titleColor: "#9ca3af",
                bodyColor: "#ffffff",
                titleFont: { size: 12, weight: "normal" as const },
                bodyFont: { size: 14, weight: "bold" as const },
                padding: 12,
                displayColors: false,
                callbacks: {
                    label: (ctx: TooltipItem<"bar">) => `${ctx.parsed.y ?? 0}%`,
                },
            },
        },
        scales: {
            x: {
                grid: { color: CHART_COLORS.gridColor },
                ticks: { color: CHART_COLORS.tickColor, font: { size: 11 } },
                border: { display: false },
            },
            y: {
                grid: { color: CHART_COLORS.gridColor },
                ticks: {
                    color: CHART_COLORS.tickColor,
                    font: { size: 11 },
                    callback: (val: number | string) => `${val}%`,
                },
                border: { display: false },
                suggestedMin: 0,
                suggestedMax: 65,
            },
        },
    };

    // --- ALLOCATION STACKED BAR CHART ---
    const assetKeys = ["BTC", "Novacore Aeroworks", "Bonds"] as const;
    const assetColors: Record<string, string> = {
        BTC: CHART_COLORS.btc,
        "Novacore Aeroworks": CHART_COLORS.nova,
        Bonds: CHART_COLORS.bonds,
    };

    const allocationChartData = {
        labels: YEAR_LABELS,
        datasets: assetKeys.map((key) => ({
            label: key,
            data: allocations.map((a) => (a as Record<string, number>)[key] || 0),
            backgroundColor: assetColors[key],
            borderRadius: 2,
            borderSkipped: false,
        })),
    };

    const allocationChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { intersect: false, mode: "index" as const },
        plugins: {
            legend: {
                display: true,
                position: "top" as const,
                labels: {
                    color: "#9ca3af",
                    font: { size: 11 },
                    padding: 20,
                    usePointStyle: true,
                    pointStyle: "rectRounded",
                },
            },
            tooltip: {
                backgroundColor: "rgba(10, 10, 10, 0.95)",
                borderColor: "rgba(59, 130, 246, 0.3)",
                borderWidth: 1,
                titleColor: "#9ca3af",
                bodyColor: "#ffffff",
                titleFont: { size: 12, weight: "normal" as const },
                bodyFont: { size: 13, weight: "normal" as const },
                padding: 12,
                callbacks: {
                    label: (ctx: TooltipItem<"bar">) =>
                        `${ctx.dataset.label}: ${ctx.parsed.y ?? 0}%`,
                },
            },
        },
        scales: {
            x: {
                stacked: true,
                grid: { color: CHART_COLORS.gridColor },
                ticks: { color: CHART_COLORS.tickColor, font: { size: 11 } },
                border: { display: false },
            },
            y: {
                stacked: true,
                grid: { color: CHART_COLORS.gridColor },
                ticks: {
                    color: CHART_COLORS.tickColor,
                    font: { size: 11 },
                    callback: (val: number | string) => `${val}%`,
                },
                border: { display: false },
                max: 100,
            },
        },
    };

    // Summary stats
    const finalAUM = aumValues[aumValues.length - 1];
    const avgReturn = (annualReturns.reduce((a, b) => a + b, 0) / annualReturns.length).toFixed(1);
    const totalMultiple = (finalAUM / INITIAL_INVESTMENT).toFixed(1);

    return (
        <section id="aum-growth" className="py-32 bg-transparent relative z-10">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm tracking-[0.3em] text-gray-500 uppercase mb-4"
                    >
                        {lang("Perkembangan AUM", "AUM Development")}
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-white"
                    >
                        {lang("15 Tahun Pertumbuhan", "15 Years of Growth")}
                    </motion.h3>
                </div>

                {/* Key Metrics */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
                >
                    <div className="border border-white/10 rounded-2xl p-6 text-center bg-white/[0.02]">
                        <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">
                            {lang("Investasi Awal", "Initial Investment")}
                        </p>
                        <p className="text-3xl font-bold text-white">$1.0B</p>
                    </div>
                    <div className="border border-white/10 rounded-2xl p-6 text-center bg-white/[0.02]">
                        <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">
                            {lang("AUM Saat Ini", "Current AUM")}
                        </p>
                        <p className="text-3xl font-bold text-white">{formatB(finalAUM)}</p>
                    </div>
                    <div className="border border-white/10 rounded-2xl p-6 text-center bg-white/[0.02]">
                        <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">
                            {lang("Rata-rata Return", "Average Return")}
                        </p>
                        <p className="text-3xl font-bold text-white">{avgReturn}% <span className="text-base font-normal text-gray-500">/ {lang("tahun", "year")}</span></p>
                    </div>
                </motion.div>

                {/* Tab Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex justify-center gap-2 mb-8"
                >
                    {tabs.map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${activeTab === tab.key
                                ? "bg-blue-600 text-white"
                                : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </motion.div>

                {/* Chart Container */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="border border-white/10 rounded-3xl p-6 md:p-10 bg-white/[0.02] backdrop-blur-sm"
                >
                    <div className="h-[400px] md:h-[480px]">
                        {activeTab === "aum" && (
                            <Line data={aumChartData} options={aumChartOptions} />
                        )}
                        {activeTab === "returns" && (
                            <Bar data={returnsChartData} options={returnsChartOptions} />
                        )}
                        {activeTab === "allocation" && (
                            <Bar data={allocationChartData} options={allocationChartOptions} />
                        )}
                    </div>

                    {/* Chart Description */}
                    <div className="mt-6 pt-6 border-t border-white/5">
                        {activeTab === "aum" && (
                            <p className="text-sm text-gray-500">
                                {lang(
                                    `Pertumbuhan investasi awal $1 Miliar selama 15 tahun dengan rata-rata return ${avgReturn}% per tahun. Total pertumbuhan ${totalMultiple}x dari investasi awal.`,
                                    `Growth of $1 Billion initial investment over 15 years with an average return of ${avgReturn}% per year. Total growth of ${totalMultiple}x from initial investment.`
                                )}
                            </p>
                        )}
                        {activeTab === "returns" && (
                            <p className="text-sm text-gray-500">
                                {lang(
                                    "Return tahunan bervariasi antara 36% hingga 57%, dengan rata-rata " + avgReturn + "% per tahun. Warna hijau menandakan return di atas rata-rata.",
                                    "Annual returns vary between 36% and 57%, with an average of " + avgReturn + "% per year. Green bars indicate above-average returns."
                                )}
                            </p>
                        )}
                        {activeTab === "allocation" && (
                            <p className="text-sm text-gray-500">
                                {lang(
                                    "Alokasi portofolio berubah setiap tahun dengan Bonds tetap di 33%. Tiga pilar utama: BTC (Digital Assets), Novacore Aeroworks, dan Bonds (Fixed Income).",
                                    "Portfolio allocation changes yearly with Bonds fixed at 33%. Three main pillars: BTC (Digital Assets), Novacore Aeroworks, and Bonds (Fixed Income)."
                                )}
                            </p>
                        )}
                    </div>
                </motion.div>

                {/* Data Table */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 border border-white/10 rounded-3xl overflow-hidden bg-white/[0.02]"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="text-left px-6 py-4 text-gray-500 font-medium uppercase tracking-wider text-xs">
                                        {lang("Tahun", "Year")}
                                    </th>
                                    <th className="text-right px-6 py-4 text-gray-500 font-medium uppercase tracking-wider text-xs">
                                        {lang("Nilai AUM", "AUM Value")}
                                    </th>
                                    <th className="text-right px-6 py-4 text-gray-500 font-medium uppercase tracking-wider text-xs">
                                        {lang("Return", "Return")}
                                    </th>
                                    <th className="text-left px-6 py-4 text-gray-500 font-medium uppercase tracking-wider text-xs hidden md:table-cell">
                                        {lang("Komposisi Aset", "Asset Composition")}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {YEAR_LABELS.map((year, i) => (
                                    <tr
                                        key={year}
                                        className="border-b border-white/5 hover:bg-white/[0.03] transition-colors"
                                    >
                                        <td className="px-6 py-3.5 text-white font-medium">{year}</td>
                                        <td className="px-6 py-3.5 text-right text-white font-mono">
                                            {formatB(aumValues[i + 1])}
                                        </td>
                                        <td className={`px-6 py-3.5 text-right font-mono ${annualReturns[i] >= 45 ? "text-green-400" : "text-blue-400"}`}>
                                            +{annualReturns[i]}%
                                        </td>
                                        <td className="px-6 py-3.5 text-gray-400 hidden md:table-cell">
                                            {Object.entries(allocations[i])
                                                .filter(([, v]) => v > 0)
                                                .map(([k, v]) => `${k} ${v}%`)
                                                .join(" / ")}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
