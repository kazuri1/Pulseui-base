import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Calendar } from ".";

const meta: Meta<typeof Calendar> = {
  title: "Components/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    view: {
      control: { type: "select" },
      options: ["month", "year", "decade"],
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    showNavigation: {
      control: { type: "boolean" },
    },
    showDayLabels: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    showOutsideDates: {
      control: { type: "boolean" },
    },
    connected: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    date: new Date(2022, 0, 1), // January 2022
    view: "month",
    size: "md",
    showNavigation: true,
    showDayLabels: true,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <h4 style={{ marginBottom: "12px" }}>Extra Small:</h4>
        <Calendar size="xs" date={new Date(2022, 0, 1)} />
      </div>
      <div>
        <h4 style={{ marginBottom: "12px" }}>Small:</h4>
        <Calendar size="sm" date={new Date(2022, 0, 1)} />
      </div>
      <div>
        <h4 style={{ marginBottom: "12px" }}>Medium:</h4>
        <Calendar size="md" date={new Date(2022, 0, 1)} />
      </div>
      <div>
        <h4 style={{ marginBottom: "12px" }}>Large:</h4>
        <Calendar size="lg" date={new Date(2022, 0, 1)} />
      </div>
      <div>
        <h4 style={{ marginBottom: "12px" }}>Extra Large:</h4>
        <Calendar size="xl" date={new Date(2022, 0, 1)} />
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(
      undefined
    );

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Calendar
          date={new Date(2022, 0, 1)}
          selectedDate={selectedDate}
          onDateSelect={setSelectedDate}
        />
        <div style={{ fontSize: "14px", color: "#666" }}>
          Selected date: {selectedDate ? selectedDate.toDateString() : "None"}
        </div>
      </div>
    );
  },
};

export const RangeSelection: Story = {
  render: () => {
    const [rangeStart, setRangeStart] = useState<Date | undefined>(undefined);
    const [rangeEnd, setRangeEnd] = useState<Date | undefined>(undefined);

    const handleDateSelect = (date: Date) => {
      if (!rangeStart || (rangeStart && rangeEnd)) {
        setRangeStart(date);
        setRangeEnd(undefined);
      } else {
        if (date >= rangeStart) {
          setRangeEnd(date);
        } else {
          setRangeStart(date);
          setRangeEnd(rangeStart);
        }
      }
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Calendar
          date={new Date(2022, 0, 1)}
          rangeStart={rangeStart}
          rangeEnd={rangeEnd}
          onDateSelect={handleDateSelect}
        />
        <div style={{ fontSize: "14px", color: "#666" }}>
          Range: {rangeStart ? rangeStart.toDateString() : "None"} -{" "}
          {rangeEnd ? rangeEnd.toDateString() : "None"}
        </div>
      </div>
    );
  },
};

export const WithoutNavigation: Story = {
  args: {
    date: new Date(2022, 0, 1),
    showNavigation: false,
  },
};

export const WithoutDayLabels: Story = {
  args: {
    date: new Date(2022, 0, 1),
    showDayLabels: false,
  },
};

export const Disabled: Story = {
  args: {
    date: new Date(2022, 0, 1),
    disabled: true,
  },
};

export const CustomDayLabels: Story = {
  args: {
    date: new Date(2022, 0, 1),
    dayLabels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  },
};

export const CurrentMonth: Story = {
  render: () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Calendar date={currentDate} onMonthChange={setCurrentDate} />
        <div style={{ fontSize: "14px", color: "#666" }}>
          Current month:{" "}
          {currentDate.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </div>
      </div>
    );
  },
};

export const MultipleCalendars: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
      <Calendar size="sm" date={new Date(2022, 0, 1)} showNavigation={false} />
      <Calendar size="sm" date={new Date(2022, 1, 1)} showNavigation={false} />
      <Calendar size="sm" date={new Date(2022, 2, 1)} showNavigation={false} />
    </div>
  ),
};

export const DifferentMonths: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <h4 style={{ marginBottom: "12px" }}>January 2022:</h4>
        <Calendar date={new Date(2022, 0, 1)} showNavigation={false} />
      </div>
      <div>
        <h4 style={{ marginBottom: "12px" }}>February 2022:</h4>
        <Calendar date={new Date(2022, 1, 1)} showNavigation={false} />
      </div>
      <div>
        <h4 style={{ marginBottom: "12px" }}>March 2022:</h4>
        <Calendar date={new Date(2022, 2, 1)} showNavigation={false} />
      </div>
    </div>
  ),
};

export const WithTodayIndicator: Story = {
  render: () => {
    const today = new Date();
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(
      undefined
    );

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Calendar
          date={today}
          view="month"
          selectedDate={selectedDate}
          onDateSelect={setSelectedDate}
        />
        <div style={{ fontSize: "14px", color: "#666" }}>
          Today: {today.toDateString()}
          {selectedDate && (
            <span style={{ marginLeft: "16px" }}>
              Selected: {selectedDate.toDateString()}
            </span>
          )}
        </div>
      </div>
    );
  },
};

export const AllViews: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <div>
        <h3 style={{ marginBottom: "16px", textAlign: "center" }}>
          Calendar Views
        </h3>
        <div
          style={{
            display: "flex",
            gap: "24px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h4 style={{ marginBottom: "12px" }}>Month View</h4>
            <Calendar
              date={new Date(2022, 0, 1)}
              view="month"
              showNavigation={false}
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <h4 style={{ marginBottom: "12px" }}>Year View (Months)</h4>
            <Calendar
              date={new Date(2022, 0, 1)}
              view="year"
              showNavigation={false}
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <h4 style={{ marginBottom: "12px" }}>Decade View (Years)</h4>
            <Calendar
              date={new Date(2022, 0, 1)}
              view="decade"
              showNavigation={false}
            />
          </div>
        </div>
      </div>
    </div>
  ),
};

export const InteractiveViews: Story = {
  render: () => {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(
      undefined
    );
    const [selectedYear, setSelectedYear] = useState<number | undefined>(
      undefined
    );
    const [selectedDecadeStart, setSelectedDecadeStart] = useState<
      number | undefined
    >(undefined);

    const handleDecadeSelect = (decadeStart: number, decadeEnd: number) => {
      setSelectedDecadeStart(decadeStart);
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        <div>
          <h3 style={{ marginBottom: "16px", textAlign: "center" }}>
            Interactive Calendar Views
          </h3>
          <div
            style={{
              display: "flex",
              gap: "24px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <h4 style={{ marginBottom: "12px" }}>Month View</h4>
              <Calendar
                date={new Date(2022, 0, 1)}
                view="month"
                selectedDate={selectedDate}
                onDateSelect={setSelectedDate}
                showNavigation={false}
              />
              <div
                style={{ fontSize: "12px", color: "#666", marginTop: "8px" }}
              >
                Selected: {selectedDate ? selectedDate.toDateString() : "None"}
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <h4 style={{ marginBottom: "12px" }}>Year View (Months)</h4>
              <Calendar
                date={new Date(2022, 0, 1)}
                view="year"
                showNavigation={false}
              />
              <div
                style={{ fontSize: "12px", color: "#666", marginTop: "8px" }}
              >
                Click a month to select it
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <h4 style={{ marginBottom: "12px" }}>Decade View (Years)</h4>
              <Calendar
                date={new Date(2022, 0, 1)}
                view="decade"
                selectedYear={selectedYear}
                onYearSelect={setSelectedYear}
                showNavigation={false}
              />
              <div
                style={{ fontSize: "12px", color: "#666", marginTop: "8px" }}
              >
                Selected: {selectedYear || "None"}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

export const ViewSwitching: Story = {
  render: () => {
    const [currentView, setCurrentView] = useState<"month" | "year" | "decade">(
      "month"
    );
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(
      undefined
    );
    const [selectedYear, setSelectedYear] = useState<number | undefined>(
      undefined
    );
    const [selectedDecadeStart, setSelectedDecadeStart] = useState<
      number | undefined
    >(undefined);

    const handleDecadeSelect = (decadeStart: number, decadeEnd: number) => {
      setSelectedDecadeStart(decadeStart);
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
          <button
            onClick={() => setCurrentView("month")}
            style={{
              padding: "8px 16px",
              background: currentView === "month" ? "#007bff" : "#f8f9fa",
              color: currentView === "month" ? "white" : "black",
              border: "1px solid #dee2e6",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Month
          </button>
          <button
            onClick={() => setCurrentView("year")}
            style={{
              padding: "8px 16px",
              background: currentView === "year" ? "#007bff" : "#f8f9fa",
              color: currentView === "year" ? "white" : "black",
              border: "1px solid #dee2e6",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Year
          </button>
          <button
            onClick={() => setCurrentView("decade")}
            style={{
              padding: "8px 16px",
              background: currentView === "decade" ? "#007bff" : "#f8f9fa",
              color: currentView === "decade" ? "white" : "black",
              border: "1px solid #dee2e6",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Decade
          </button>
        </div>

        <Calendar
          date={new Date(2022, 0, 1)}
          view={currentView}
          selectedDate={currentView === "month" ? selectedDate : undefined}
          selectedYear={
            currentView === "year" || currentView === "decade"
              ? selectedYear
              : undefined
          }
          onDateSelect={currentView === "month" ? setSelectedDate : undefined}
          onYearSelect={
            currentView === "year" || currentView === "decade"
              ? setSelectedYear
              : undefined
          }
          showNavigation={false}
        />

        <div style={{ fontSize: "14px", color: "#666", textAlign: "center" }}>
          Current View: {currentView}
          {currentView === "month" && selectedDate && (
            <span style={{ marginLeft: "16px" }}>
              Selected: {selectedDate.toDateString()}
            </span>
          )}
          {currentView === "year" && selectedYear && (
            <span style={{ marginLeft: "16px" }}>Selected: {selectedYear}</span>
          )}
          {currentView === "decade" && selectedYear && (
            <span style={{ marginLeft: "16px" }}>Selected: {selectedYear}</span>
          )}
        </div>
      </div>
    );
  },
};

export const ConnectedNavigation: Story = {
  render: () => {
    const [currentView, setCurrentView] = useState<"month" | "year" | "decade">(
      "month"
    );
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(
      undefined
    );
    const [selectedYear, setSelectedYear] = useState<number | undefined>(
      undefined
    );
    const [selectedDecadeStart, setSelectedDecadeStart] = useState<
      number | undefined
    >(undefined);

    const handleDecadeSelect = (decadeStart: number, decadeEnd: number) => {
      setSelectedDecadeStart(decadeStart);
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div style={{ textAlign: "center", marginBottom: "8px" }}>
          <h4 style={{ margin: "0 0 8px 0" }}>Connected Navigation</h4>
          <p style={{ fontSize: "12px", color: "#666", margin: 0 }}>
            Click header titles to navigate between views. Click years/decades
            to drill down.
          </p>
        </div>

        <Calendar
          date={new Date(2022, 0, 1)}
          view={currentView}
          connected={true}
          selectedDate={currentView === "month" ? selectedDate : undefined}
          selectedYear={
            currentView === "year" || currentView === "decade"
              ? selectedYear
              : undefined
          }
          onDateSelect={currentView === "month" ? setSelectedDate : undefined}
          onYearSelect={
            currentView === "year" || currentView === "decade"
              ? setSelectedYear
              : undefined
          }
          onViewChange={setCurrentView}
          showNavigation={false}
        />

        <div style={{ fontSize: "14px", color: "#666", textAlign: "center" }}>
          Current View: {currentView}
          {currentView === "month" && selectedDate && (
            <span style={{ marginLeft: "16px" }}>
              Selected: {selectedDate.toDateString()}
            </span>
          )}
          {currentView === "year" && selectedYear && (
            <span style={{ marginLeft: "16px" }}>Selected: {selectedYear}</span>
          )}
          {currentView === "decade" && selectedYear && (
            <span style={{ marginLeft: "16px" }}>Selected: {selectedYear}</span>
          )}
        </div>
      </div>
    );
  },
};

export const WithIndicators: Story = {
  render: () => {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(
      undefined
    );

    // Custom indicator function - show indicators for weekends and today
    const getDateIndicator = (date: Date) => {
      const today = new Date();
      const isToday = date.toDateString() === today.toDateString();
      const isWeekend = date.getDay() === 0 || date.getDay() === 6; // Sunday or Saturday

      return isToday || isWeekend;
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div style={{ textAlign: "center", marginBottom: "8px" }}>
          <h4 style={{ margin: "0 0 8px 0" }}>Calendar with Indicators</h4>
          <p style={{ fontSize: "12px", color: "#666", margin: 0 }}>
            Red dots show on today and weekend dates
          </p>
        </div>

        <Calendar
          date={new Date(2024, 0, 15)} // January 2024
          selectedDate={selectedDate}
          onDateSelect={setSelectedDate}
          showIndicators={true}
          getDateIndicator={getDateIndicator}
        />

        <div style={{ fontSize: "14px", color: "#666", textAlign: "center" }}>
          Selected date: {selectedDate ? selectedDate.toDateString() : "None"}
        </div>
      </div>
    );
  },
};

export const CustomIndicators: Story = {
  render: () => {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(
      undefined
    );

    // Custom indicator function - show indicators for specific dates
    const getDateIndicator = (date: Date) => {
      // Show indicators for dates that are multiples of 5
      return date.getDate() % 5 === 0;
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div style={{ textAlign: "center", marginBottom: "8px" }}>
          <h4 style={{ margin: "0 0 8px 0" }}>Custom Indicators</h4>
          <p style={{ fontSize: "12px", color: "#666", margin: 0 }}>
            Red dots show on dates that are multiples of 5
          </p>
        </div>

        <Calendar
          date={new Date(2024, 0, 15)} // January 2024
          selectedDate={selectedDate}
          onDateSelect={setSelectedDate}
          showIndicators={true}
          getDateIndicator={getDateIndicator}
        />

        <div style={{ fontSize: "14px", color: "#666", textAlign: "center" }}>
          Selected date: {selectedDate ? selectedDate.toDateString() : "None"}
        </div>
      </div>
    );
  },
};
