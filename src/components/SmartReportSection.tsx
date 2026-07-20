import { AppBadge } from "./common/AppBadge";

const SmartReportSection = () => {
  return (
    <section className="w-full overflow-hidden bg-card px-5 pb-0 pt-10 text-left lg:border-y lg:border-border lg:bg-primary-light/40 lg:py-10 md:px-8">
      <div className="mx-auto max-w-[1140px]">
        <div className="grid grid-cols-1 items-center gap-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="space-y-4 lg:space-y-2">
              <h2 className="text-[32px] font-black leading-tight tracking-tight text-primary md:text-4xl lg:font-bold">
                MedLab Smart Report
              </h2>

              <p className="max-w-xs text-[28px] font-medium leading-tight tracking-tight text-muted-foreground md:text-2xl lg:font-normal">
                Now understanding lab <br className="lg:hidden" />
                reports got easier
              </p>

              <h3 className="text-[30px] font-black leading-tight tracking-tight text-primary lg:border-l-2 lg:border-primary lg:py-0.5 lg:pl-3 lg:text-lg lg:font-bold lg:text-foreground">
                Consolidated Health <br className="lg:hidden" />
                History Report
              </h3>

              <p className="hidden max-w-xs border-l-2 border-primary pl-3 text-xs font-medium leading-normal text-muted-foreground lg:block">
                Track biological parameters across multi-month charts preventing
                vital baseline metric errors seamlessly.
              </p>
            </div>
          </div>

          <div className="relative mx-auto mt-0 h-[420px] max-w-[430px] lg:col-span-7 lg:flex lg:h-[430px] lg:max-w-none lg:items-end lg:justify-center lg:gap-6 lg:pt-12 md:h-[440px]">
            <PhoneReportCard />
            <PhoneOverviewCard />
          </div>

          <div className="-mx-5 h-3 bg-primary lg:hidden" />
        </div>
      </div>
    </section>
  );
};

const PhoneShell = ({
  children,
  className = "",
  notchClassName = "",
}: {
  children: React.ReactNode;
  className?: string;
  notchClassName?: string;
}) => {
  return (
    <div
      className={`absolute bottom-0 flex shrink-0 flex-col overflow-hidden rounded-[34px] border-[6px] border-foreground bg-card text-xs shadow-2xl lg:relative lg:bottom-auto ${className}`}
    >
      <div
        className={`absolute left-1/2 top-0 z-30 h-6 -translate-x-1/2 rounded-b-xl bg-foreground lg:h-3.5 ${notchClassName}`}
      />

      {children}
    </div>
  );
};

const PhoneReportCard = () => {
  return (
    <PhoneShell
      className="left-0 z-20 h-[405px] w-[205px] md:h-[420px] md:w-[215px] lg:left-auto lg:h-[390px] lg:w-[210px]"
      notchClassName="w-24 lg:w-20"
    >
      <div className="flex-1 space-y-3 overflow-hidden bg-card p-3 pt-9 text-[7px] lg:overflow-y-auto lg:p-3.5 lg:pt-6 lg:text-[9px]">
        <div className="flex items-center justify-between border-b border-border pb-2">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-dashed border-primary text-[7px] font-bold text-primary lg:h-7 lg:w-7 lg:text-[9px]">
              100
            </div>

            <div>
              <h5 className="text-[8px] font-bold leading-none text-foreground lg:text-[10px]">
                Drishti Gosain
              </h5>

              <span className="text-[7px] font-medium text-muted-foreground lg:text-[7.5px]">
                Female, 23 Yrs
              </span>
            </div>
          </div>

          <span className="hidden text-[8px] font-bold text-primary lg:block">
            Verified
          </span>
        </div>

        <div className="flex rounded bg-muted p-0.5 text-center text-[7px] font-bold text-muted-foreground">
          <div className="flex-1 rounded bg-card py-0.5 text-foreground shadow-sm">
            Critical Report
          </div>
          <div className="flex-1 py-0.5">Full Report</div>
          <div className="flex-1 py-0.5">Advice</div>
        </div>

        <div className="space-y-1.5 lg:space-y-2">
          <AppBadge
            variant="warning"
            className="rounded-sm px-1.5 py-0.5 text-[7px]"
          >
            Some borderline results
          </AppBadge>

          <h6 className="text-[8px] font-bold leading-tight text-foreground lg:text-[10px]">
            Thyroid Profile - Total (T3, T4 & TSH Ultra-sensitive)
          </h6>

          <p className="text-justify text-[7px] font-medium leading-normal text-muted-foreground lg:text-[8px]">
            Hypothyroidism is caused by insufficient production of thyroid
            hormone by the thyroid gland. T3 and T4 hormones are released by the
            thyroid gland, which also regulates metabolism.
          </p>
        </div>

        <div className="space-y-2 rounded-lg border border-border bg-muted/40 p-2.5">
          <div className="flex justify-between text-[7px] font-bold text-foreground lg:text-[9px]">
            <span>T3, Total Triiodothyronine</span>
            <span className="text-warning">1.39</span>
          </div>

          <div className="pt-0.5">
            <div className="flex h-1.5 overflow-hidden rounded-sm bg-border">
              <div className="w-[35%] bg-success" />
              <div className="w-[30%] bg-warning" />
              <div className="w-[35%] bg-danger" />
            </div>
          </div>
        </div>
      </div>
    </PhoneShell>
  );
};

const PhoneOverviewCard = () => {
  return (
    <PhoneShell
      className="right-0 z-10 h-[340px] w-[185px] md:h-[360px] md:w-[195px] lg:right-auto lg:h-[360px] lg:w-[205px] lg:translate-y-6"
      notchClassName="w-20"
    >
      <div className="flex-1 space-y-3.5 overflow-hidden bg-card p-3 pt-9 text-[7px] lg:overflow-y-auto lg:p-3.5 lg:pt-6 lg:text-[9px]">
        <div className="flex items-center justify-between border-b border-border pb-2">
          <span className="text-[8px] font-bold text-foreground lg:text-[11px]">
            Smart Overview
          </span>

          <div className="rounded border border-primary-light bg-primary-light px-1.5 py-0.5 text-[7px] font-bold text-primary lg:text-[8px]">
            Score: 78%
          </div>
        </div>

        <div className="space-y-2">
          <span className="block text-[7px] font-bold uppercase tracking-wider text-muted-foreground">
            Liver Function Test
          </span>

          <ReportStatusRow label="Albumin, Serum" status="Normal" />
          <ReportStatusRow
            label="SGPT / ALT"
            status="Borderline"
            statusClassName="text-warning"
          />
        </div>

        <div className="space-y-1.5 rounded-xl border border-border bg-muted/50 p-2.5 text-[7px] lg:text-[9px]">
          <div className="flex items-baseline justify-between font-bold text-foreground">
            <span>Total Cholesterol</span>
            <span className="text-success">185 mg/dL</span>
          </div>

          <div className="h-1.5 w-full overflow-hidden rounded-full bg-border">
            <div className="h-full w-[65%] bg-success" />
          </div>
        </div>
      </div>
    </PhoneShell>
  );
};

const ReportStatusRow = ({
  label,
  status,
  statusClassName = "text-success",
}: {
  label: string;
  status: string;
  statusClassName?: string;
}) => {
  return (
    <div className="flex items-center justify-between rounded-xl border border-border bg-muted/50 p-2.5 text-[7px] lg:text-[9px]">
      <span className="font-bold text-foreground">{label}</span>
      <span className={`${statusClassName} font-bold`}>{status}</span>
    </div>
  );
};

export default SmartReportSection;